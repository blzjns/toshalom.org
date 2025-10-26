export default function InstagramPost({ htmlData }: { htmlData: string }) {
  return (
    <>
      <div
        dangerouslySetInnerHTML={{ __html: htmlData }}
      ></div>
    </>
  );
}
