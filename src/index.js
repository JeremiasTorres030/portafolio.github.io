const redSocialImg=document.getElementById("redSocialImg"),chatImg=document.getElementById("chatImg"),bibliotecaImg=document.getElementById("bibliotecaImg"),showButtonInfo=e=>{const t=document.createElement("div");t.setAttribute("id",e),t.setAttribute("class","infoDiv");const n=document.createElement("button"),i=document.createTextNode("Más información");return n.appendChild(i),n.setAttribute("id",`${e}Button`),n.setAttribute("class","infoDivButton"),t.appendChild(n),t};redSocialImg.addEventListener("mouseenter",(()=>{const e=showButtonInfo("infoDivRedSocial");redSocialImg.appendChild(e),document.getElementById("infoDivRedSocialButton").addEventListener("click",(()=>{const e=document.getElementById("redSocialInfoCard");e.classList.contains("hidden")?e.classList.remove("hidden"):e.classList.add("hidden")}))})),redSocialImg.addEventListener("mouseleave",(()=>{document.getElementById("infoDivRedSocial").remove()})),chatImg.addEventListener("mouseenter",(()=>{const e=showButtonInfo("infoDivChat");chatImg.appendChild(e),document.getElementById("infoDivChatButton").addEventListener("click",(()=>{const e=document.getElementById("chatInfoCard");e.classList.contains("hidden")?e.classList.remove("hidden"):e.classList.add("hidden")}))})),chatImg.addEventListener("mouseleave",(()=>{document.getElementById("infoDivChat").remove()})),bibliotecaImg.addEventListener("mouseenter",(()=>{const e=showButtonInfo("infoDivBiblioteca");bibliotecaImg.appendChild(e),document.getElementById("infoDivBibliotecaButton").addEventListener("click",(()=>{const e=document.getElementById("bibliotecaInfoCard");e.classList.contains("hidden")?e.classList.remove("hidden"):e.classList.add("hidden")}))})),bibliotecaImg.addEventListener("mouseleave",(()=>{document.getElementById("infoDivBiblioteca").remove()}));