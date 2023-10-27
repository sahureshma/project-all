document.addEventListener("DOMContentLoaded", ()=>{
    const canvas=document.getElementById("i-canvas");
    const ctx=canvas.getContext("2d");
    const centerX=canvas.width/2;
    const centerY=canvas.height/2;
    const fontSize=20;
    const fontColor="red";
    const fillColor = "yellow";
    ctx.fillStyle = fillColor;
    ctx.font=`${fontSize}px Arial`;
    ctx.fillStyle=fontColor;
    ctx.textAlign="center";
    ctx.textBaseline="middle";
    const character="R";
    ctx.fillText(character,centerX,centerY)
    const getCanvasData=()=>{
        const imageData=ctx.getImageData(0,0,canvas.width,canvas.height);
        const data=imageData.data;
        const pixelColors=[];
        for(let i=0;i<data.length;i+=4){
            const hexColor=rgbToHex(data[i],data[i+1],data[i+2]);
            pixelColors.push(hexColor)
        }
        return pixelColors;
    };
    const componentToHex=(c)=>{
        const hex=c.toString(16);
        return hex.length===1 ? "0" + hex : hex;
    };
    const rgbToHex=(r,g,b)=>{
        return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
    }
    const downloadLink=document.getElementById("download-link");
    downloadLink.addEventListener("click",()=>{
        const pixelColors=getCanvasData();
        const fileContent=pixelColors.join("\n");
        const blob = new Blob([fileContent],{type: "text/plain"});
        downloadLink.href=URL.createObjectURL(blob)
    })

})