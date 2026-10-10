import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="container">
      <main style={{ padding: "60px 0", minHeight: "80vh" }}>
        <h1 className="title" style={{ textAlign: "center", marginBottom: "40px" }}>ねこのてコラボ 利用規約</h1>
        <div className="card terms-content" style={{ lineHeight: "1.8" }}>

          <h2 style={{ marginTop: "30px", marginBottom: "15px", fontSize: "1.5rem", borderBottom: "1px solid #eee", paddingBottom: "10px" }}>前文</h2>
          <p>この利用規約（以下「本規約」）は、ペネッコ・ドカ・イーティング（以下「運営者」）が提供する「ねこのてコラボ -女性V向けコラボ相手紹介所-」（以下「本サービス」）の利用条件を定めるものです。</p>
          <p>参加者は、ご紹介アンケートにおいて本規約に同意したうえで、本サービスを利用するものとします。本サービスは現在、無料のβ版として提供しています。</p>

          <h2 style={{ marginTop: "30px", marginBottom: "15px", fontSize: "1.5rem", borderBottom: "1px solid #eee", paddingBottom: "10px" }}>第1条（目的と適用）</h2>
          <ol style={{ paddingLeft: "20px", marginBottom: "20px" }}>
            <li>本規約は、本サービスの利用に関する運営者と参加者との関係に適用されます。</li>
            <li>運営者が別に定めるルール（会員サーバーのルール、案内文など）は、本規約の一部を構成します。本規約と内容が異なる場合は、本規約が優先します。</li>
          </ol>

          <h2 style={{ marginTop: "30px", marginBottom: "15px", fontSize: "1.5rem", borderBottom: "1px solid #eee", paddingBottom: "10px" }}>第2条（定義）</h2>
          <ul style={{ paddingLeft: "20px", marginBottom: "20px" }}>
            <li><strong>「申込者」</strong>：かんたん申し込みフォームに回答した者</li>
            <li><strong>「参加者」</strong>：運営者による確認を経て、ご紹介アンケートにおいて本規約に同意し、会員サーバーへの参加を完了した者</li>
            <li><strong>「会員サーバー」</strong>：本サービスのために運営者が管理するDiscordサーバー</li>
            <li><strong>「打診カード」</strong>：活動名を伏せた状態で、コラボ相手の候補に個別に送付する紹介の案内</li>
            <li><strong>「グループ」</strong>：打診に対し全員が「進める」を選択したことにより成立した、コラボを行う参加者の組</li>
            <li><strong>「グループチャンネル」</strong>：グループごとに会員サーバー内に作成する非公開のチャンネル</li>
            <li><strong>「まとめ役」</strong>：グループにおいて、日程の調整や当日の段取りを担う参加者</li>
            <li><strong>「コラボ配信」</strong>：本サービスの紹介を契機として行う配信</li>
          </ul>

          <h2 style={{ marginTop: "30px", marginBottom: "15px", fontSize: "1.5rem", borderBottom: "1px solid #eee", paddingBottom: "10px" }}>第3条（サービスの内容）</h2>
          <ol style={{ paddingLeft: "20px", marginBottom: "20px" }}>
            <li>本サービスは、参加者の希望をもとに、運営者が手動で条件をすり合わせ、配信コラボの相手を紹介するサービスです。</li>
            <li>運営者が行うのは、紹介、初回の橋渡し、日程調整の支援までとします。コラボ配信の企画および実施は、参加者が自らの責任で行うものとします。</li>
            <li>本サービスは配信コラボを目的とするものであり、恋愛・交際を目的とした利用はできません。</li>
            <li>運営者は、紹介の頻度について目標を示すことがありますが、紹介の頻度およびグループの成立を保証するものではありません。</li>
          </ol>

          <h2 style={{ marginTop: "30px", marginBottom: "15px", fontSize: "1.5rem", borderBottom: "1px solid #eee", paddingBottom: "10px" }}>第4条（利用資格）</h2>
          <ol style={{ paddingLeft: "20px", marginBottom: "20px" }}>
            <li>本サービスを利用できるのは、次のすべてを満たす者とします。
              <ul style={{ paddingLeft: "20px", marginTop: "10px", marginBottom: "10px" }}>
                <li>18歳以上、または保護者の同意を得た18歳未満であること</li>
                <li>事務所や企業に所属せず、個人で活動していること</li>
                <li>すでにデビューし、現在YouTubeで活動していること</li>
                <li>公開中の配信アーカイブが5本以上あること</li>
                <li>マイクを使用した音声通話ができること</li>
                <li>Discordを利用できること（参加までに導入する場合を含みます）</li>
                <li>中の人（活動している本人）が女性であること</li>
              </ul>
            </li>
            <li>運営者は、資格の確認のため、公開されているチャンネルおよびアカウントを確認します。身分証明書等の書類の提出は求めません。</li>
            <li>運営者は、理由を開示することなく、申し込みをお断りすることがあります。</li>
            <li>申告内容に虚偽があることが判明した場合、運営者は第9条に定める措置を講じることがあります。</li>
          </ol>

          <h2 style={{ marginTop: "30px", marginBottom: "15px", fontSize: "1.5rem", borderBottom: "1px solid #eee", paddingBottom: "10px" }}>第5条（参加の手続き）</h2>
          <ol style={{ paddingLeft: "20px", marginBottom: "20px" }}>
            <li>申込者は、かんたん申し込みフォームにより申し込むものとします。</li>
            <li>運営者は、申し込み内容を確認のうえ、参加の可否を原則として3日以内にXのDMで連絡します。申込者が希望した場合は、DMの送付後にリプライでお知らせします。</li>
            <li>申し込みから3日を経過してもDMが届かない場合、申込者は運営者（X @pde_vtuber）にDMで問い合わせるものとします。</li>
            <li>参加が可能な申込者には、ご紹介アンケートを送付します。運営者は、ご紹介アンケートへの回答（本規約への同意を含みます。）を確認したのち、会員サーバーへの招待を送付します。会員サーバーへの参加が運営者により承認された時点で、参加者となります。</li>
          </ol>

          <h2 style={{ marginTop: "30px", marginBottom: "15px", fontSize: "1.5rem", borderBottom: "1px solid #eee", paddingBottom: "10px" }}>第6条（紹介の流れ）</h2>
          <ol style={{ paddingLeft: "20px", marginBottom: "20px" }}>
            <li>運営者は、打診カードを、候補となる参加者に個別に送付します。打診カードには、可否の検討に必要な内容を記載し、コラボ相手の活動名やアカウントなどは記載しません。</li>
            <li>参加者は、打診カードに記載された期限までに「進める」または「見送る」を返答するものとします。期限内に返答がない場合は、見送りとして扱います。</li>
            <li>候補者全員が「進める」を選択した場合にグループが成立し、運営者はグループチャンネルを作成します。この時点で、互いの活動名等が共有されます。</li>
            <li>グループが成立しなかった場合、運営者は候補者全員にその旨を通知します。ただし、見送った者および不成立の理由は通知しません。</li>
            <li>運営者は、グループ内の参加者にまとめ役を依頼することがあります。</li>
            <li>初回のコラボ配信は、グループチャンネルの作成日から30日以内に実施するものとします。期間内に実施されない場合、運営者は確認のうえ不成立とします。不成立となった場合、同一の構成での再提案は行いません。</li>
            <li>グループチャンネルは、初回のコラボ配信の実施後、または不成立の確定後に、運営者が削除します。削除の24時間前に予告しますので、必要な情報は各自で控えてください。</li>
            <li>運営者は、グループチャンネルに参加し、日程調整の支援や通報への対応などを行います。</li>
            <li>削除前に通報や相談があった場合、運営者は、確認に必要な範囲で記録を取ったうえで削除、または削除を保留することがあります。</li>
            <li>会員サーバーでは、他の参加者から、自身が参加していることが確認できます。</li>
          </ol>

          <h2 style={{ marginTop: "30px", marginBottom: "15px", fontSize: "1.5rem", borderBottom: "1px solid #eee", paddingBottom: "10px" }}>第7条（コラボ配信のルール）</h2>
          <ol style={{ paddingLeft: "20px", marginBottom: "20px" }}>
            <li>コラボ配信は、原則として参加者がそれぞれのチャンネルで配信枠を設け、マイクを使用した音声通話により行うものとします。</li>
            <li>参加者は、コラボ配信の概要欄等に、相手のチャンネルURLを記載するものとします。</li>
            <li>概要欄に運営クレジット「【紹介】ねこのてコラボ／運営：@pde_vtuber」を記載するものとします。配信内での本サービスの口頭での紹介は任意とします。</li>
            <li>切り抜きの公開は、グループ内で相談の上、決定することとします。合意に至らない場合は、グループ内で最も厳しい方針に従うものとします。誤解を生む編集や、個人情報を含む部分の公開は行わないものとします。相手から削除の依頼があった場合は、7日以内に対応するものとします。</li>
            <li>コラボ配信で得た収益は、各参加者に帰属します。参加者間で、収益の分配、出演料その他の金銭のやり取りは行わないものとします。</li>
            <li>BGM、ゲーム、画像等の素材は、各参加者の責任において、権利者の定めるルールに従って使用するものとします。</li>
            <li>企業案件、PR、広告、アフィリエイトを含むコラボ配信、および第三者から依頼を受けたコラボ配信は、本サービスの対象外とします。ただし、第3項の運営クレジットの記載、および参加者が自身のグッズやメンバーシップ等を告知することは、ここでいうPR等には含みません。</li>
          </ol>

          <h2 style={{ marginTop: "30px", marginBottom: "15px", fontSize: "1.5rem", borderBottom: "1px solid #eee", paddingBottom: "10px" }}>第8条（禁止事項）</h2>
          <p style={{ marginBottom: "10px" }}>参加者は、本サービスの利用にあたり、次の行為をしてはなりません。</p>
          <ol style={{ paddingLeft: "20px", marginBottom: "20px" }}>
            <li>営業・勧誘・宣伝のみを目的とした利用</li>
            <li>誹謗中傷、ハラスメント、性的な言動、差別</li>
            <li>他人の個人情報の詮索または公開</li>
            <li>参加者に対し、個別のDMや通話を強要すること</li>
            <li>紹介を受ける前に、他の申込者または参加者を探索し、特定すること</li>
            <li>連絡なしのドタキャンまたは不参加</li>
            <li>コラボ相手の画像を、生成AIや機械学習のツールに入力、または学習させること</li>
            <li>企業案件、PR、アフィリエイトを含むコラボ配信</li>
            <li>なりすまし、または申告内容の虚偽</li>
            <li>運営者を介さない参加者への一斉勧誘、および本サービスで知り得た情報（打診カード、グループチャンネルの内容、会員サーバーの参加者等）の無断転載または公開</li>
            <li>Discord、X、YouTube等の各プラットフォームの規約または法令に違反する行為</li>
            <li>虚偽の通報</li>
          </ol>

          <h2 style={{ marginTop: "30px", marginBottom: "15px", fontSize: "1.5rem", borderBottom: "1px solid #eee", paddingBottom: "10px" }}>第9条（違反への措置）</h2>
          <ol style={{ paddingLeft: "20px", marginBottom: "20px" }}>
            <li>運営者は、参加者が本規約に違反した場合、違反の内容に応じて次の措置を講じることがあります。下表は例示であり、最終的な判断は運営者が行います。
              <div style={{ margin: "15px 0", overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid #ddd" }}>
                  <thead>
                    <tr style={{ backgroundColor: "#f9f9f9" }}>
                      <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left" }}>措置</th>
                      <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left" }}>主な例</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ border: "1px solid #ddd", padding: "8px" }}>注意</td>
                      <td style={{ border: "1px solid #ddd", padding: "8px" }}>軽微な連絡の遅れ</td>
                    </tr>
                    <tr>
                      <td style={{ border: "1px solid #ddd", padding: "8px" }}>即時の利用停止および退会（再申し込み不可）</td>
                      <td style={{ border: "1px solid #ddd", padding: "8px" }}>悪質な誹謗中傷、個人情報の公開、なりすまし、勧誘行為、連絡なしの欠席2回</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </li>
            <li>措置に異議がある場合、参加者は、措置の通知から7日以内に運営者に申し出ることができます。</li>
            <li>利用停止となった者の情報は、再申し込みの防止およびトラブルへの対応のために、YouTubeチャンネルURL、停止日、停止の理由および証拠の記録を保持し、それ以外は削除します。</li>
          </ol>

          <h2 style={{ marginTop: "30px", marginBottom: "15px", fontSize: "1.5rem", borderBottom: "1px solid #eee", paddingBottom: "10px" }}>第10条（通報）</h2>
          <ol style={{ paddingLeft: "20px", marginBottom: "20px" }}>
            <li>参加者は、運営者のDiscordアカウントへのDMにより、「【通報】」と記載して通報することができます。</li>
            <li>運営者は、通報者の情報を、対応に必要な範囲を超えて相手に伝えません。</li>
            <li>憶測のみによる通報は、調査の対象としないことがあります。</li>
            <li>身体の危険を感じる場合など緊急を要するときは、警察または各プラットフォームの窓口に連絡してください。</li>
          </ol>

          <h2 style={{ marginTop: "30px", marginBottom: "15px", fontSize: "1.5rem", borderBottom: "1px solid #eee", paddingBottom: "10px" }}>第11条（個人情報の取り扱い）</h2>
          <ol style={{ paddingLeft: "20px", marginBottom: "20px" }}>
            <li>運営者が取得する情報は、かんたん申し込みフォームおよびご紹介アンケートの回答、運営者とのやり取りの内容、通報および相談の内容とします。本名、住所、電話番号および身分証明書は取得しません。</li>
            <li>運営者は、取得した情報を、次の目的にのみ利用します。
              <ul style={{ paddingLeft: "20px", marginTop: "10px", marginBottom: "10px" }}>
                <li>参加資格の確認</li>
                <li>運営者からの連絡（参加の案内、打診、日程調整、お知らせ）</li>
                <li>コラボ相手の組み合わせの検討</li>
                <li>打診カードおよびグループチャンネルの準備</li>
                <li>通報への対応および第9条の措置</li>
                <li>再申し込みの防止およびトラブルへの対応（利用停止となった者に限ります）</li>
                <li>本サービスの改善のための振り返り（個人を特定しない集計に限ります）</li>
                <li>料金の変更、サービスの終了等の重要なお知らせ</li>
              </ul>
            </li>
            <li>紹介の仕組み上、次の情報は他の参加者に共有されます。
              <ul style={{ paddingLeft: "20px", marginTop: "10px", marginBottom: "10px" }}>
                <li>打診カード：可否の検討に必要な内容（活動名およびアカウントは伏せます）</li>
                <li>グループ成立後：活動名、YouTubeおよびXのURLその他グループチャンネルで共有する情報</li>
                <li>会員サーバー：会員サーバーに参加している事実</li>
              </ul>
            </li>
            <li>一緒にならないようにしたい方として回答した内容、見送った者、グループ不成立の理由、通報したことおよびその内容は、他の参加者に共有しません（対応に必要な範囲を除きます）。</li>
            <li>運営者は、前2項に定める場合のほか、法令に基づく場合、および人の生命・身体・財産の保護のために必要で本人の同意を得ることが困難な場合を除き、本人の同意なく情報を第三者に提供しません。</li>
            <li>参加資格を満たさない場合は、回答を削除します。退会した場合は、情報を削除します。ただし、次の情報は除きます。
              <ul style={{ paddingLeft: "20px", marginTop: "10px", marginBottom: "10px" }}>
                <li>通報および相談の記録（対応に必要な期間に限ります）</li>
                <li>第9条の措置を検討している間に退会した者の情報（第9条第3項と同様に取り扱います）</li>
                <li>個人を特定しない集計</li>
                <li>DMの履歴や他の参加者に共有済みの情報など、運営者が削除できないもの</li>
              </ul>
              <p style={{ marginTop: "10px" }}>利用停止となった場合の取り扱いは、第9条第3項によります。</p>
            </li>
            <li>参加者は、自身の情報の開示、訂正、削除または利用停止を、運営者へのDMにより求めることができます。</li>
          </ol>

          <h2 style={{ marginTop: "30px", marginBottom: "15px", fontSize: "1.5rem", borderBottom: "1px solid #eee", paddingBottom: "10px" }}>第12条（休止と退会）</h2>
          <ol style={{ paddingLeft: "20px", marginBottom: "20px" }}>
            <li>参加者は、運営者に連絡することにより、いつでも休止または退会することができます。</li>
            <li>休止中は、紹介を行いません。休止が6か月継続した場合、運営者は情報の削除について確認の連絡を行います。</li>
            <li>退会した場合、運営者は第11条第6項に従い参加者の情報を削除し、会員サーバーから外します。</li>
            <li>退会時に進行中のグループがある場合は、相手への連絡のため、事前に運営者に知らせるものとします。</li>
          </ol>

          <h2 style={{ marginTop: "30px", marginBottom: "15px", fontSize: "1.5rem", borderBottom: "1px solid #eee", paddingBottom: "10px" }}>第13条（料金）</h2>
          <ol style={{ paddingLeft: "20px", marginBottom: "20px" }}>
            <li>β期間中、本サービスは無料です。運営者は紹介料等を受け取りません。</li>
            <li>将来、有料に移行する場合は、料金および内容を事前に正式に告知し、同意した参加者のみを移行します。同意なく請求することはありません。</li>
            <li>β版を終了する場合も、事前に告知します。</li>
          </ol>

          <h2 style={{ marginTop: "30px", marginBottom: "15px", fontSize: "1.5rem", borderBottom: "1px solid #eee", paddingBottom: "10px" }}>第14条（免責）</h2>
          <ol style={{ paddingLeft: "20px", marginBottom: "20px" }}>
            <li>運営者は紹介の場を提供するものであり、コラボ配信の内容および結果、参加者間のトラブルについて責任を負いません。ただし、運営者の故意または重大な過失による場合は除きます。</li>
            <li>運営者は、参加者間のトラブルについて、本規約に基づく範囲で、事実の確認や措置を行うことがあります。</li>
            <li>Discord、X、YouTube、Googleフォーム等の外部サービスの不具合または仕様変更により生じた損害について、運営者は責任を負いません。</li>
            <li>運営者は、事前に告知したうえで、本サービスの内容を変更し、または中断・終了することがあります。</li>
          </ol>

          <h2 style={{ marginTop: "30px", marginBottom: "15px", fontSize: "1.5rem", borderBottom: "1px solid #eee", paddingBottom: "10px" }}>第15条（規約の変更）</h2>
          <ol style={{ paddingLeft: "20px", marginBottom: "20px" }}>
            <li>運営者は、必要に応じて本規約を変更することがあります。</li>
            <li>変更する場合は、変更の内容および効力発生日を、事前に会員サーバーおよびXで告知します。</li>
            <li>効力発生日以降に本サービスを利用した場合、変更後の規約に同意したものとみなします。ただし、料金に関わる変更は、第13条に従います。</li>
          </ol>

          <h2 style={{ marginTop: "30px", marginBottom: "15px", fontSize: "1.5rem", borderBottom: "1px solid #eee", paddingBottom: "10px" }}>第16条（準拠法）</h2>
          <p>本規約は、日本法に準拠して解釈されるものとします。</p>

          <h2 style={{ marginTop: "30px", marginBottom: "15px", fontSize: "1.5rem", borderBottom: "1px solid #eee", paddingBottom: "10px" }}>附則</h2>
          <p>2026年10月10日 制定（β版）</p>

        </div>
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <Link href="/" className="btn-primary" style={{ padding: "12px 24px", minHeight: "auto" }}>
            トップページに戻る
          </Link>
        </div>
      </main>
    </div>
  );
}
