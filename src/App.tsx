import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useForm } from "react-hook-form";
import { MdContentCopy } from "react-icons/md";
import styled from "styled-components";
import "./App.css";
import { Inputs, UserForm } from "./components/UserForm";


const JitaiSubject = styled.div`
  display: flex;
  margin: 0 auto;
  text-align: left;
  width: 100%;
  color: white;
`;

const JitaiBody = styled.div`
  display: flex;
  margin: 0 auto;
  text-align: left;
  width: 100%;
  color: white;
`;

const Span = styled.span`
  display: flex;
  text-align: right;
  font-weight: 400;
  padding: 5px;
`;

const H2 = styled.h2`
  font-weight: 400;
  display: flex;
  color: white;
  text-align: left;
  padding-bottom: 10px;
  border-bottom: 1px solid rgb(79, 89, 148);
`;

export const App: React.FC = () => {
  const { register, handleSubmit, watch } = useForm<Inputs>();

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
      <UserForm onSubmit={onSubmit} register={register} />
      <H2>件名</H2>
      <JitaiSubject>
        <CopyToClipboard text={subject} onCopy={() => alert("Copied")}>
          <Span>
            <MdContentCopy />
          </Span>
        </CopyToClipboard>
        <pre>{subject}</pre>
      </JitaiSubject>
      <H2>本文</H2>
      <JitaiBody>
        <CopyToClipboard text={body} onCopy={() => alert("Copied")}>
          <Span>
            <MdContentCopy />
          </Span>
        </CopyToClipboard>
        <pre>{body}</pre>
      </JitaiBody>
    </>
  );
};

export default App;
