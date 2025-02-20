import React from "react";

// Reusable ASCII Art Screen Component
const AsciiScreen = ({ title }) => {
  // Store the art in a template literal with consistent indentation
  const art = `
　∧ ∧
 (ﾟーﾟ*)
 (|　　つ
～（＿つ
　し'
`;

  return (
    <pre className="text-xs font-mono leading-tight text-center whitespace-pre-wrap">
      {`${title}\n${art}`}
    </pre>
  );
};

export default AsciiScreen;
