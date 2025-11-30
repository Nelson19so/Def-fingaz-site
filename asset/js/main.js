// Copy to clipBoard
async function copyToClipboard(copyItem) {
  try {
    await navigator.clipboard.writeText(copyItem);
    alert(`Copied '${copyItem}'`);
  } catch (err) {
    console.log("error copying text: ", err);
  }
}
