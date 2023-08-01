function showHTMLAndCSS() {
    const htmlCode = `
        &lt;!DOCTYPE html&gt;
        &lt;html&gt;
        &lt;head&gt;
            &lt;title&gt;Mi Página&lt;/title&gt;
        &lt;/head&gt;
        &lt;body&gt;
            &lt;h1&gt;Bienvenido a mi página&lt;/h1&gt;
            &lt;p&gt;Este es un ejemplo de armado en HTML.&lt;/p&gt;
        &lt;/body&gt;
        &lt;/html&gt;
    `;

    const cssCode = `
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
        }

        h1 {
            color: #008080;
        }

        p {
            color: #333;
        }
    `;

    const htmlSection = document.getElementById('github');
    const cssSection = document.getElementById('linkedin');

    htmlSection.innerHTML = `<h2>Armado en HTML</h2><pre><code>${htmlCode}</code></pre>`;
    cssSection.innerHTML = `<h2>Estilos CSS</h2><pre><code>${cssCode}</code></pre>`;
}