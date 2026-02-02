"use client";

import { useState } from "react";
import Link from "next/link";
import { baseStyles } from "./ui/styles";
import { INFO_TEXT } from "./data/recycling";

export default function Home() {
  // explanation state
  const [info, setInfo] = useState("");

  return (
    <main style={baseStyles.page}>
      <header style={baseStyles.header} className="anim anim-slide-down">
        <div style={baseStyles.badge}>♻</div>
        <div>
          <h1 style={baseStyles.title}>분리수거 지침</h1>
          <p style={baseStyles.subtitle}>분리수거를 제대로 하는 법을 알아보자</p>
        </div>
      </header>

      <section style={baseStyles.container}>
        <div style={baseStyles.card} className="anim anim-fade-up anim-delay-1">
          <h2 style={baseStyles.cardTitle}>읽어보시오</h2>

          <select
            className="control"
            onChange={(e) => setInfo(INFO_TEXT[e.target.value] || "")}
          >
            <option value="">종류 선택</option>
            <option value="plastic">플라스틱</option>
            <option value="can">캔</option>
            <option value="paper">종이</option>
            <option value="general">일반</option>
          </select>

          <p style={baseStyles.helpText}>{info || "설명 종류를 선택해 주세요."}</p>

          <div style={baseStyles.actionsRow}>
            <Link href="/why" className="btn btn-secondary">
              분리수거가 필요한 이유
            </Link>
            <Link href="/guide" className="btn btn-secondary">
              종류 검색
            </Link>
            <Link href="/quiz" className="btn btn-primary">
              퀴즈 시작하기
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
