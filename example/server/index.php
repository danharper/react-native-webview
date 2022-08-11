<?php if ($_GET['ajax']) { var_export($_COOKIE); die; } ?>
<p>Cookies in page request:</p>
<pre><?php var_export($_COOKIE); ?></pre>
<p>Cookies in ajax request:</p>
<pre id="output">...loading...</pre>
<script>
    const output = document.getElementById('output');
    fetch('/?ajax=1').then(r => r.text()).then(t => output.innerText = t).catch(_err => output.innerText = _err);
</script>
