
 // Function to fetch a random line from the Google Docs document.
 function fetchRandomLine() {
    const iframe = document.createElement('iframe');
    iframe.src = "https://docs.google.com/document/d/e/2PACX-1vSvC6hYNPXvAql4n41rCHJkRjG3camQQIrpjfJnv6HFnh2UVNABsAwy7WBWTmqA3pbvzOLvLxqB-WwA/pub?embedded=true"; // Replace with your Google Docs document URL
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
  
    iframe.onload = function() {
        const doc = iframe.contentDocument;
        const paragraphs = doc.querySelectorAll('p');
        const randomIndex = Math.floor(Math.random() * paragraphs.length);
        const randomLine = paragraphs[randomIndex].textContent;
        alert(randomLine);
        document.body.removeChild(iframe);
    }
  }
  
        function randonLine() {
          const content = document.getElementsByTagName('textarea')[0].value
          const lines = content.split('\n')
          lines.shift()
          const randomLine = Math.floor(Math.random() * lines.length)
          document.getElementById('output').innerText = lines[randomLine]
        }
function back(){
  window.location.href="index.html"
}
  