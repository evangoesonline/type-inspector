const sentenceTag = document.querySelector(`input[type="text"]`)

const typesizeTag = document.querySelector(`input[name="typesize"]`)
const typesizeOutput = document.querySelector("span.typesize-output")

const lineheightTag = document.querySelector(`input[name="lineheight"]`)
const lineheightOutput = document.querySelector("span.lineheight-output")

const italicTag = document.querySelector(`input[name="italic"]`)

const typefaceTag = document.querySelector(`select[name="typeface"]`)

const fontweightTag = document.querySelector(`input[name="font-weight"]`)
const fontweightOutput = document.querySelector("span.fontweight-output")

const colorTags = document.querySelectorAll("div.colors div")

const outputTag = document.querySelector("textarea.output")
const originalText = outputTag.value

// type in sentence tag, update the output tag 
// if there's no value, use original text
sentenceTag.addEventListener("keyup", function () {
    if (this.value) {
        outputTag.value = this.value
    } else {
        outputTag.value = originalText
    }
})

// type in output tag, update the sentence tag 
outputTag.addEventListener("keyup", function () {
    sentenceTag.value = this.value
})

// change  typesize slider, update the text next to it AND
// change the ouputTag's font size
typesizeTag.addEventListener("input", function () {
    outputTag.style.fontSize = this.value + "px"
    typesizeOutput.innerHTML = this.value + "px"
})

fontweightTag.addEventListener("input", function () {
    outputTag.style.fontWeight = this.value
    fontweightOutput.innerHTML = this.value
})

lineheightTag.addEventListener("input", function () {
    outputTag.style.lineHeight = this.value
    lineheightOutput.innerHTML = this.value
})

// change italic checkbox, update the font style to either
// normal or italic if it's checked or not
italicTag.addEventListener("change", function () {
    if (this.checked) {
        outputTag.style.fontStyle = "italic"
    } else {
        outputTag.style.fontStyle = "normal"
    }
})

// change select for typeface, update the font family
typefaceTag.addEventListener("input", function () {
    outputTag.style.fontFamily = `"${this.value}"`
})

// go through all color tags,
//click one of them, change the background color and 
// the text color, and make this tag be selected
colorTags.forEach(tag => {

    tag.addEventListener("click", function () {
        outputTag.style.backgroundColor = this.style.backgroundColor
        outputTag.style.color = this.style.color

        // reset the classes
        colorTags.forEach(tag => {
            tag.classList.remove("selected")
        })

        // only to this clicked one
        this.classList.add("selected")
    })

})
