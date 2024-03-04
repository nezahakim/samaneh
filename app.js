function process(){
    file = document.getElementById("upload").files[0];

    if(!file) return;

    const reader = FileReader();
    reader.readAsDataUrl(file);

    reader.onload = function(event){
        const imgElement = document.createElement("img");
        imgElement.src = event.target.result;

        document.querySelector("#input").src = event.target.result;
        
        imgElement.onload = function(e){
            const canvas = document.creatElement("canvas");
            const max_width = 600;

            const scaleSize = max_width / e.target.width;
            canvas.width = max_width;
            canvas.height = e.target.height * scaleSize;

            const ctx = canvas.getContext("2d");
            ctx.drawImage(e.target, 0, 0, canvas.width, canvas.height);

            const srcEncoded = ctx.canvas.toDataURL(e.target, "image/jpg");
            console.log(srcEncoded);

            document.querySelector("#output").src = srcEncoded;

        }
    }

}
