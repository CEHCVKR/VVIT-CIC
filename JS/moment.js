(function updateTime() {
  var time = (new Date()).toLocaleString({
    hour12: true,
  });
  
  document.getElementById('demo').innerHTML = time;
  
  requestAnimationFrame(updateTime);
})();


<script>
 document.getElementById("demo").innerHTML = Date();
</script>