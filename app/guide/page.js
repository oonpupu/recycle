"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { baseStyles } from "../ui/styles";
import { CATEGORIES, GUIDE_ITEMS } from "../data/recycling";

export default function GuidePage() {
  const [q, setQ] = useState("");

  const matches = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return GUIDE_ITEMS;
    return GUIDE_ITEMS.filter((it) => it.name.toLowerCase().includes(query));
  }, [q]);

  const catByKey = useMemo(() => {
    return Object.fromEntries(CATEGORIES.map((c) => [c.key, c]));
  }, []);

  return (
    <main style={baseStyles.page}>
      <header style={baseStyles.header} className="anim anim-slide-down">
        <div>
          <h1 style={baseStyles.title}>분리수거 가이드</h1>
          <p style={baseStyles.subtitle}>
            버릴 물건을 검색하면 어디에 버려야 하는지 알려줘요.
          </p>
        </div>
      </header>

      <section style={baseStyles.container}>
        <div style={baseStyles.card} className="anim anim-fade-up anim-delay-1">
          <h2 style={baseStyles.cardTitle}>검색</h2>
          <input
            className="control"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="예: 페트병, 캔, 종이, 영수증"
          />

          <div style={{ marginTop: 14, display: "grid", gap: 10 }}>
            {matches.map((it) => {
              const cat = catByKey[it.categoryKey];
              return (
                <div
                  key={it.name}
                  style={{
                    padding: 12,
                    borderRadius: 14,
                    border: "1px solid rgba(0,0,0,0.08)",
                    background: "rgba(255,255,255,0.7)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 12,
                    }}
                  >
                    <strong>{it.name}</strong>
                    <span style={baseStyles.quizPill}>{cat?.label ?? "?"}</span>
                  </div>
                  <ul style={{ margin: "10px 0 0", paddingLeft: 18 }}>
                    {it.tips.map((t) => (
                      <li key={t} style={{ color: "rgba(0,0,0,0.78)" }}>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div style={baseStyles.actionsRow}>
            <Link href="/" className="btn btn-secondary">
              설명 페이지
            </Link>
            <Link href="/why" className="btn btn-secondary">
              필요성(이유)
            </Link>
            <Link href="/quiz" className="btn btn-primary">
              퀴즈 시작하기
            </Link>
          </div>
        </div>

        <div style={baseStyles.card} className="anim anim-fade-up anim-delay-2">
          <h2 style={baseStyles.cardTitle}>카테고리 기본 규칙</h2>
          <div style={{ display: "grid", gap: 10 }}>
            {CATEGORIES.map((c) => (
              <div
                key={c.key}
                style={{
                  padding: 12,
                  borderRadius: 14,
                  border: "1px solid rgba(0,0,0,0.08)",
                  background: "rgba(255,255,255,0.7)",
                }}
              >
                <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <span style={baseStyles.quizPill}>{c.label}</span>
                  <span style={{ color: "rgba(0,0,0,0.78)" }}>{c.info}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

