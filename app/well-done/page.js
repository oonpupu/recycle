 "use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { baseStyles } from "../ui/styles";

export default function WellDonePage() {
  const [results, setResults] = useState(null);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem("quizResults");
      if (!raw) return;
      setResults(JSON.parse(raw));
    } catch {
      // ignore parse/storage errors
    }
  }, []);

  const score = results?.score ?? null;
  const total = results?.total ?? null;
  const wrongCount = Array.isArray(results?.wrong) ? results.wrong.length : null;

  return (
    <main style={baseStyles.page}>
      <header style={baseStyles.header} className="anim anim-slide-down">
        <div>
          <h1 style={baseStyles.title}>잘했다!</h1>
          <p style={baseStyles.subtitle}>
            경!축!
          </p>
        </div>
      </header>

      <section style={baseStyles.container}>
        <div style={baseStyles.card} className="anim anim-fade-up anim-delay-1">
          <h2 style={baseStyles.cardTitle}>결과</h2>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <span style={baseStyles.quizPill}>
              점수 {score === null ? "-" : score} / {total === null ? "-" : total}
            </span>
            <span style={baseStyles.quizPill}>
              틀린 문제 {wrongCount === null ? "-" : wrongCount}개
            </span>
          </div>

          <div style={baseStyles.actionsRow}>
            <Link href="/quiz" className="btn btn-primary">
              다시 풀기
            </Link>
            <Link href="/quiz?mode=wrong" className="btn btn-secondary">
              틀린 문제만 다시
            </Link>
            <Link href="/guide" className="btn btn-secondary">
              가이드(검색)
            </Link>
            <Link href="/" className="btn btn-secondary">
              설명 보기
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

