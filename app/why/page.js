import Link from "next/link";
import { baseStyles } from "../ui/styles";

export default function WhyRecyclingPage() {
  return (
    <main style={baseStyles.page}>
      <header style={baseStyles.header} className="anim anim-slide-down">
        <div>
          <h1 style={baseStyles.title}>분리수거가 필요한 이유</h1>
          <p style={baseStyles.subtitle}>
            분리수거는 자원을 최대한 활용할 수 있는 방법이다.
          </p>
        </div>
      </header>

      <section style={baseStyles.container}>
        <div style={baseStyles.card} className="anim anim-fade-up anim-delay-1">
          <h2 style={baseStyles.cardTitle}>필요한 이유</h2>

          <ul style={{ marginTop: 20, marginBottom: 6, paddingLeft: 18, lineHeight: 3.5 }}>
            <li>
              <strong>쓰레기 감소</strong>: 매립, 소각되는 쓰레기의 양이 줄어든다.
            </li>
            <li>
              <strong>자원 절약</strong>: 새로운 원료를 사용하는 과정을 줄일 수 있다.
            </li>
          </ul>
        </div>

        <div style={baseStyles.card} className="anim anim-fade-up anim-delay-2">


          <div style={baseStyles.actionsRow}>
            <Link href="/" className="btn btn-secondary">
              설명 페이지
            </Link>
            <Link href="/guide" className="btn btn-secondary">
              가이드(검색)
            </Link>
            <Link href="/quiz" className="btn btn-primary">
              퀴즈로 연습하기
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

