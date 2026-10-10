import Link from "next/link";
import FixedButton from "../components/FixedButton";

export default function Home() {
  return (
    <>
      <main>
        {/* 1. トップ */}
        <section className="hero">
          <div className="container">
            <div style={{ marginBottom: "20px" }}>
              <img src="/nekonote.png" alt="ねこのてコラボ アイコン" style={{ width: "150px", height: "auto", margin: "0 auto", display: "block" }} />
            </div>
            <p className="subtitle">女性V向けコラボ相手紹介所</p>
            <h1 className="title">ねこのてコラボ</h1>
            <h2 className="catchcopy">コラボ相手探し、「ねこのて」お貸しします。</h2>
            <p className="note">女性個人勢VTuberさん限定。β版は無料です。</p>
            <a
              href="https://forms.gle/yM8mR5QV33onhNWY7"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              無料で申し込む（β版）
            </a>
          </div>
        </section>

        {/* 2. こんなお悩みありませんか？ */}
        <section className="fade-in">
          <div className="container">
            <h2 className="section-title">こんなお悩みありませんか？</h2>
            <div className="card text-center">
              <ul className="trouble-list">
                <li>コラボしてみたいけど誘い方が分からない</li>
                <li>「断られたらどうしよう…」と思うと誘えない</li>
                <li>相手と配信の雰囲気が合うか不安</li>
              </ul>
              <p className="conclusion">ねこのてコラボが、そのはじめの一歩をお手伝いします。</p>
            </div>
          </div>
        </section>

        {/* 3. ねこのてコラボの3つの特徴 */}
        <section className="fade-in section-bg-light">
          <div className="container">
            <h2 className="section-title">ねこのてコラボの3つの特徴</h2>
            <div className="grid-3">
              <div className="card feature-card">
                <h3>運営が手作業でご紹介</h3>
                <p>ジャンル、雰囲気、配信できる時間帯などの希望をもとに、運営が一組ずつ条件をすり合わせてご紹介します。</p>
              </div>
              
              <div className="card feature-card">
                <h3>決まるまで名前は伏せたまま</h3>
                <p>最初のお誘いは、活動名を伏せた「打診カード」で届きます。見送っても、誰が見送ったかは相手に伝わりません。</p>
              </div>
              
              <div className="card feature-card">
                <h3>女性の個人勢さん限定</h3>
                <p>中の人が女性の、個人で活動しているVTuberさんだけが参加できます。</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. 参加の流れ */}
        <section className="fade-in">
          <div className="container">
            <h2 className="section-title">参加の流れ</h2>
            <div className="step-list">
              <div className="step-item">
                <div className="step-num">1</div>
                <div className="step-content">
                  <h3>申し込み</h3>
                  <p>かんたんな申し込みフォーム（約1分）に答えていただきます</p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-num">2</div>
                <div className="step-content">
                  <h3>運営からご連絡</h3>
                  <p>条件を確認して、XのDMにてご連絡いたします</p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-num">3</div>
                <div className="step-content">
                  <h3>詳しいアンケート</h3>
                  <p>コラボの希望や配信可能日などを教えていただきます</p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-num">4</div>
                <div className="step-content">
                  <h3>Discordサーバーに参加</h3>
                  <p>運営から招待を送信いたしますので、Discordのサーバーに参加していただきます</p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-num">5</div>
                <div className="step-content">
                  <h3>打診カードが届く</h3>
                  <p>活動名を伏せたコラボ相手の打診カードが届くので、「進める」か「見送る」を選んでいただきます</p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-num">6</div>
                <div className="step-content">
                  <h3>顔合わせ</h3>
                  <p>全員が「進める」を選ぶと、グループのチャンネルで初めて顔合わせとなります</p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-num">7</div>
                <div className="step-content">
                  <h3>グループで日程調整</h3>
                  <p>運営のアシストのもと、グループで配信日を決定していただきます</p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-num">8</div>
                <div className="step-content">
                  <h3>配信の内容について話し合う</h3>
                  <p>配信の内容や当日の段取りについては、皆さまでご相談ください</p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-num">9</div>
                <div className="step-content">
                  <h3>コラボ配信</h3>
                  <p>コラボ配信をおこなっていただきます</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. 安心のための仕組み */}
        <section className="fade-in section-bg-light">
          <div className="container">
            <h2 className="section-title">安心のための仕組み</h2>
            <div className="card text-center">
              <ul className="check-list">
                <li><strong>NG事項の共有：</strong>苦手な話題などを、打診の段階でお互いに伝えます</li>
                <li><strong>一緒になりたくない人の指定：</strong>運営だけが確認し、相手には伝わりません</li>
                <li><strong>切り抜き方針のすり合わせ：</strong>事前にすり合わせを行います</li>
                <li><strong>通報窓口：</strong>困ったときは、運営にDMで相談できます</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 6. 参加条件 */}
        <section className="fade-in">
          <div className="container">
            <h2 className="section-title">参加条件</h2>
            <p style={{marginBottom: "15px", textAlign: "center"}}>β版では次のすべてに当てはまる方が参加できます。</p>
            <div className="card text-center">
              <ul className="check-list">
                <li>18歳以上、または保護者の同意を得た18歳未満であること</li>
                <li>事務所や企業に所属せず、個人で活動していること</li>
                <li>すでにデビューし、現在YouTubeで活動していること</li>
                <li>公開中の配信アーカイブが5本以上あること</li>
                <li>マイクを使用した音声通話ができること</li>
                <li>Discordを利用できること（これからの方は運営がサポート可能です）</li>
                <li>中の人（活動している本人）が女性であること</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 7. 打診カードの見本 */}
        <section className="fade-in section-bg-light">
          <div className="container">
            <h2 className="section-title">打診カードの見本</h2>
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <img 
                src="/mihon.png" 
                alt="打診カードの見本" 
                style={{ width: "100%", maxWidth: "800px", height: "auto", margin: "0 auto", borderRadius: "16px", boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)" }} 
              />
            </div>
          </div>
        </section>

        {/* 8. よくある質問 */}
        <section className="fade-in">
          <div className="container">
            <h2 className="section-title">よくある質問</h2>
            
            <details>
              <summary>料金はかかりますか？</summary>
              <div className="details-content">
                β版の間は無料です。将来有料になる場合は、前もってお知らせし、同意してくださった方だけにご参加いただきます。
              </div>
            </details>
            
            <details>
              <summary>相手は選べますか？</summary>
              <div className="details-content">
                運営からご提案します。届いた打診カードを見て、「進める」か「見送る」を選べます。
              </div>
            </details>
            
            <details>
              <summary>見送ったことは、相手に知られますか？</summary>
              <div className="details-content">
                グループが成立しなかったことは、候補の皆さんにお知らせします。ただし、誰が見送ったか、なぜ成立しなかったかはお伝えしません。<br />
                打診の段階ではお互いの活動名も伏せているので、見送ったのがあなただと分かることはありません。
              </div>
            </details>
            
            <details>
              <summary>どれくらいで紹介されますか？</summary>
              <div className="details-content">
                参加者の状況によって変わります。頻度のお約束はできません。
              </div>
            </details>
            
            <details>
              <summary>中の人が男性のVTuberや、事務所に所属しているVTuberは参加できますか？</summary>
              <div className="details-content">
                β版では「中の人が女性の個人勢VTuber」だけを対象にしています。
              </div>
            </details>
            
            <details>
              <summary>個人情報はどう扱われますか？</summary>
              <div className="details-content">
                ご紹介と運営からのご連絡に使用いたします。ご紹介に必要な範囲で、ほかの参加者にお伝えする情報があります。詳しくは利用規約の『個人情報の取り扱い』をご覧ください。
              </div>
            </details>
            
            <details>
              <summary>ねこのてコラボを利用したことを伏せてコラボできますか？</summary>
              <div className="details-content">
                恐れ入りますが、ご紹介で成立したコラボ配信では、概要欄に運営クレジットの記載をお願いしています。
              </div>
            </details>
          </div>
        </section>

        {/* 9. 運営者プロフィール */}
        <section className="fade-in section-bg-light">
          <div className="container">
            <h2 className="section-title">運営者プロフィール</h2>
            <div className="card profile-card">
              <div className="profile-img">
                <img src="/pde_profile.png" alt="ペネッコ・ドカ・イーティング" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <h3 className="profile-title">ペネッコ・ドカ・イーティング</h3>
              <p className="profile-role">
                ゲーム配信や雑談配信を中心に活動するVTuber。<br />
                自身のLive2Dモデリングを手掛けており、BOOTHでは3Dギミックやデスクトップアプリを販売するなど、<br />
                ものづくりにも力を入れている。<br />
                VRCシェアハウス「おかえりあ」の管理人として、人と人とをつなぐ場づくりにも取り組んでいる。
              </p>
              
              <p className="profile-msg">
                配信も、ものづくりも、みんなでやるともっと楽しい。コラボのきっかけを、「ねこのて」でお手伝いします。
              </p>
              
              <div className="profile-links">
                <a href="https://x.com/pde_vtuber" target="_blank" rel="noopener noreferrer">X：@pde_vtuber</a>
                <a href="https://www.youtube.com/@penecco-doca-eating" target="_blank" rel="noopener noreferrer">YouTube</a>
                <a href="https://pde-vtuber.booth.pm" target="_blank" rel="noopener noreferrer">BOOTH</a>
              </div>
            </div>
          </div>
        </section>

        {/* 10. 申込みボタン（もう一度） */}
        <section className="fade-in bottom-cta">
          <div className="container">
            <h2 className="section-title">まずは、かんたん申し込みから</h2>
            <p>約1分で終わります。条件を確認して、運営からご連絡します。</p>
            <a
              href="https://forms.gle/yM8mR5QV33onhNWY7"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              無料で申し込む（β版）
            </a>
          </div>
        </section>
      </main>

      {/* 11. フッター */}
      <footer>
        <div className="container">
          <div className="footer-links">
            <Link href="/terms">利用規約</Link>
          </div>
          <p>ねこのてコラボ（β版） 運営：ペネッコ・ドカ・イーティング</p>
        </div>
      </footer>

      {/* 固定申込ボタン（スマホ用など・スクロールで出現） */}
      <FixedButton />
    </>
  );
}
