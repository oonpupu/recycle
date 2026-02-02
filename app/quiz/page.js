"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { baseStyles } from "../ui/styles";
import { OPTIONS, QUIZZES } from "../data/recycling";

export default function QuizPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const mode = searchParams.get("mode"); // "wrong" | null
  const [wrongOnlyIndices, setWrongOnlyIndices] = useState(null);

  useEffect(() => {
    if (mode !== "wrong") {
      setWrongOnlyIndices(null);
      return;
    }
    try {
      if (typeof window === "undefined") return;
      const raw = window.sessionStorage.getItem("quizResults");
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed?.wrong)) return;
      setWrongOnlyIndices(parsed.wrong.filter((n) => Number.isInteger(n)));
    } catch {
      // ignore storage errors
    }
  }, [mode]);

  const questions = useMemo(() => {
    if (mode !== "wrong") return QUIZZES;
    if (!wrongOnlyIndices || wrongOnlyIndices.length === 0) return QUIZZES;
    return wrongOnlyIndices.map((i) => QUIZZES[i]).filter(Boolean);
  }, [mode, wrongOnlyIndices]);

  const [index, setIndex] = useState(0);
  const [result, setResult] = useState("");
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [wrong, setWrong] = useState([]);

  const quiz = questions[index];
  const isLast = index === questions.length - 1;

  function checkAnswer(i) {
    if (answered) return;
    setSelected(i);
    setAnswered(true);
    const ok = i === quiz.answer;
    setResult(ok ? `정답 (${OPTIONS[quiz.answer]})` : ` 틀렸다 (정답: ${OPTIONS[quiz.answer]})`);
    if (ok) setScore((s) => s + 1);
    else {
      // store the ORIGINAL index when in normal mode; in wrong mode, store current list index
      const originalIndex =
        mode === "wrong"
          ? wrongOnlyIndices?.[index] ?? index
          : QUIZZES.findIndex((q) => q.id === quiz.id);
      setWrong((prev) => [...prev, originalIndex]);
    }
  }

  function nextQuiz() {
    if (isLast) {
      try {
        sessionStorage.setItem(
          "quizResults",
          JSON.stringify({
            score,
            total: questions.length,
            wrong,
            mode: mode || "normal",
          })
        );
      } catch {
        // ignore storage failures
      }
      router.push("/well-done");
      return;
    }
    setResult("");
    setSelected(null);
    setAnswered(false);
    setIndex((prev) => prev + 1);
  }

  return (
    <main style={baseStyles.page}>
      <header style={baseStyles.header} className="anim anim-slide-down">
        <div>
          <h1 style={baseStyles.title}>퀴즈</h1>
          <p style={baseStyles.subtitle}>
            {mode === "wrong" ? "틀린 문제 다시 풀기" : "사진을 보고 올바른 분류를 선택하세요."}
          </p>
        </div>
      </header>

      <section style={baseStyles.container}>
        <div style={baseStyles.card} className="anim anim-fade-up anim-delay-1">
          <div style={baseStyles.quizHeader}>
            <h2 style={baseStyles.cardTitle}>문제</h2>
            <span style={baseStyles.quizPill}>
              {index + 1} / {questions.length} · 점수 {score}
            </span>
          </div>

          <div style={baseStyles.imageFrame}>
            <img
              key={quiz.image}
              src={quiz.image}
              alt="quiz"
              style={baseStyles.image}
              className="quiz-image"
            />
          </div>

          <p style={baseStyles.question}>어디에 버리면 될까요?</p>

          <div style={baseStyles.options}>
            {OPTIONS.map((opt, i) => (
              <button
                key={i}
                className="btn btn-option"
                onClick={() => checkAnswer(i)}
                disabled={answered}
                aria-pressed={selected === i}
              >
                {opt}
              </button>
            ))}
          </div>

          {result && <p className="result anim anim-pop">{result}</p>}

          <div style={baseStyles.actionsRow}>
            <button className="btn btn-primary" onClick={nextQuiz} disabled={!answered}>
              {isLast ? "완료" : "다음"}
            </button>
            <Link href="/guide" className="btn btn-secondary">
              가이드(검색)
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

