import type { ReactNode } from "react";

export function renderContent(content: string) {
  const blocks = content.split("\n\n");
  const elements: ReactNode[] = [];

  blocks.forEach((block, index) => {
    const trimmed = block.trim();
    if (!trimmed) return;

    if (trimmed.startsWith("## ")) {
      elements.push(
        <h2 key={index}>{trimmed.replace("## ", "")}</h2>
      );
    } else if (trimmed.startsWith("### ")) {
      elements.push(
        <h3 key={index}>{trimmed.replace("### ", "")}</h3>
      );
    } else if (trimmed.startsWith("- ")) {
      const items = trimmed.split("\n").filter((l) => l.startsWith("- "));
      elements.push(
        <ul key={index}>
          {items.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: formatInline(item.replace("- ", "")) }} />
          ))}
        </ul>
      );
    } else if (trimmed.startsWith("|")) {
      const rows = trimmed.split("\n").filter((l) => l.startsWith("|"));
      const headers = rows[0].split("|").filter(Boolean).map((h) => h.trim());
      const dataRows = rows.slice(2);
      elements.push(
        <table key={index}>
          <thead>
            <tr>{headers.map((h, i) => <th key={i}>{h}</th>)}</tr>
          </thead>
          <tbody>
            {dataRows.map((row, ri) => {
              const cells = row.split("|").filter(Boolean).map((c) => c.trim());
              return (
                <tr key={ri}>{cells.map((c, ci) => <td key={ci}>{c}</td>)}</tr>
              );
            })}
          </tbody>
        </table>
      );
    } else if (/^\d+\.\s/.test(trimmed)) {
      const items = trimmed.split("\n").filter((l) => /^\d+\.\s/.test(l));
      elements.push(
        <ol key={index}>
          {items.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: formatInline(item.replace(/^\d+\.\s/, "")) }} />
          ))}
        </ol>
      );
    } else {
      elements.push(
        <p key={index} dangerouslySetInnerHTML={{ __html: formatInline(trimmed) }} />
      );
    }
  });

  return elements;
}

function formatInline(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>");
}
