const links = new Set();
const allowedChars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'; 

function generate() {

    additionalText=document.getElementById('Length').value;
    while (links.size < additionalText) {
      let identifier = "";
      
      for (let j = 0; j < 8; j++) {
        for (let i=0; i < 5; i++) {
        identifier += allowedChars[Math.floor(Math.random() * allowedChars.length)];
      }
      console.log(j);
      if (j!= 7){
      identifier=identifier+"-";}

    
    }
    
      links.add(document.getElementById("input").value+ identifier);
    }


    const excelData = [[additionalText+' Links'], ...Array.from(links).map(link => [link])];
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.aoa_to_sheet(excelData);
    XLSX.utils.book_append_sheet(workbook, worksheet, additionalText+" Links");
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const excelBlob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const excelUrl = URL.createObjectURL(excelBlob);

    const downloadLink = document.createElement('a');
    downloadLink.href = excelUrl;
    downloadLink.download = 'linksig.xlsx';
    downloadLink.click();

    document.body.removeChild(downloadLink);
  }
