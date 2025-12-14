// script.js

const validSerials = ["0001","0002","0003","0004","0005"];
let currentSerial = "";

function checkSerial() {
    const input = document.getElementById('serialNumber').value.trim();
    const awardDiv = document.getElementById('award');
    const downloadBtn = document.getElementById('downloadBtn');

    if(validSerials.includes(input)) {
        currentSerial = input;
        awardDiv.innerHTML = `
            <h3>恭喜你！</h3>
            <p>你是第 ${input} 位拯救地球的梅森者 🌿</p>
            <p>感謝你支持永續在地農業與循環經濟！</p>
            <p>了解更多品牌故事請 <a href="https://www.twsoybean.com.tw/" target="_blank">點此連結</a></p>
        `;
        downloadBtn.style.display = "inline-block";
    } else {
        awardDiv.innerHTML = "<p>序號無效，請重新輸入 ❌</p>";
        downloadBtn.style.display = "none";
    }
}

function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFont("Noto Serif TC", "bold");
    doc.setFontSize(22);
    doc.text("皺梅 – 梅子味噌電子獎狀", 105, 30, {align: "center"});
    
    doc.setFontSize(18);
    doc.text(`恭喜你！`, 105, 50, {align: "center"});
    doc.text(`你是第 ${currentSerial} 位拯救地球的梅森者 🌿`, 105, 65, {align: "center"});
    doc.setFontSize(14);
    doc.text("感謝你支持永續在地農業與循環經濟！", 105, 80, {align: "center"});
    doc.text("了解更多品牌故事請造訪 www.twsoybean.com.tw", 105, 95, {align: "center"});

    doc.save(`皺梅_梅子味噌_電子獎狀_${currentSerial}.pdf`);
}
