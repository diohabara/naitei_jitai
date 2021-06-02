import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useForm } from "react-hook-form";
import { MdContentCopy } from "react-icons/md";
import "./App.css";

type Inputs = {
  userName: string;
  userUniversity: string;
  company: string;
  recruiterName: string;
};

export const App: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const [subject, setSubject] = useState("件名");
  const [body, setBody] = useState("本文");

  const onSubmit = handleSubmit(
    ({ userName, userUniversity, company, recruiterName }) => {
      setSubject(`内定辞退のご連絡 ${userUniversity} ${userName}`);
      setBody(`
  ${company} 人事部
  ${recruiterName}様

  お世話になっております。内定の通知をいただきました、${userName}です。
  メールにて失礼いたします。

  この度は内定のご連絡をいただき、誠にありがとうございました。
  このようなうれしいお知らせをいただきながら誠に恐縮なのですが、検討の結果、内定を辞退させていただきたくご連絡を差し上げました。

  履歴書や職務経歴書にお目通しをいただいたり、面接でのご対応をしていただいたりと、貴重なお時間を割いてくださったにもかかわらず、このようなご連絡になりますことを大変心苦しく感じております。

  本来であれば貴社へお伺いし、直接お詫びをするべきところではございますが、メールでのご連絡となるところを、何卒ご容赦いただきたくお願い申し上げます。

  面接をご担当いただいた${recruiterName}様をはじめ、採用に関わってくださった皆さまには、心より感謝しております。
  最後になりますが、貴社の益々の発展を心よりお祈り申し上げます。
  -----------------------
  ${userName}`);
    }
  );

  console.log(
    watch("userName"),
    watch("userUniversity"),
    watch("company"),
    watch("recruiterName")
  );

  return (
    <>
      <form onSubmit={onSubmit}>
        <label>名前</label>
        <input {...register("userName")} />

        <label>大学名</label>
        <input {...register("userUniversity")} />

        <label>会社名</label>
        <input {...register("company")} />

        <label>採用担当者名</label>
        <input {...register("recruiterName")} />

        <input type="submit" />
      </form>

      <div className="subject">
        {subject}
        <CopyToClipboard text={subject} onCopy={() => alert("Copied")}>
          <div className="copyButton">
            <MdContentCopy />
          </div>
        </CopyToClipboard>
      </div>

      <div className="body">
        {body}
        <CopyToClipboard text={body} onCopy={() => alert("Copied")}>
          <div className="copyButton">
            <MdContentCopy />
          </div>
        </CopyToClipboard>
      </div>
    </>
  );
};

export default App;
