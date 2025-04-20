global.color = (palette) => {
    newcolors=[];
    lang.palette.colors.forEach(el => { newcolors.push(el.replace("$", lang.palette.colornames[palette])) } );
    return newcolors;
}

module.exports = [
    {
        color: 'hsl(0, 0%, 0%)',
        label: lang.palette.black[0],
    },
    {
        color: 'hsl(0, 0%, 12.5%)',
        label: lang.palette.black[1],
    },
    {
        color: 'hsl(0, 0%, 25%)',
        label: lang.palette.black[2],
    },
    {
        color: 'hsl(0, 0%, 37.5%)',
        label: lang.palette.black[3],
    },
    {
        color: 'hsl(0, 0%, 50%)',
        label: lang.palette.black[4],
    },
    {
        color: 'hsl(0, 0%, 62.5%)',
        label: lang.palette.black[5],
    },
    {
        color: 'hsl(0, 0%, 75%)',
        label: lang.palette.black[6],
    },
    {
        color: 'hsl(0, 0%, 87.5%)',
        label: lang.palette.black[7],
    },
    {
        color: 'hsl(0, 0%, 100%)',
        label: lang.palette.black[8],
        hasBorder: true,
    },
    {
        color: 'hsl(0, 100%, 10%)',
        label: color("red")[0],
    },
    {
        color: 'hsl(0, 100%, 12.5%)',
        label: color("red")[1],
    },
    {
        color: 'hsl(0, 100%, 25%)',
        label: color("red")[2],
    },
    {
        color: 'hsl(0, 100%, 37.5%)',
        label: color("red")[3],
    },
    {
        color: 'hsl(0, 100%, 50%)',
        label: color("red")[4],
    },
    {
        color: 'hsl(0, 100%, 62.5%)',
        label: color("red")[5],
    },
    {
        color: 'hsl(0, 100%, 75%)',
        label: color("red")[6],
    },
    {
        color: 'hsl(0, 100%, 87.5%)',
        label: color("red")[7],
    },
    {
        color: 'hsl(0, 100%, 90%)',
        label: color("red")[8],
        hasBorder: true,
    },
    {
        color: 'hsl(30, 100%, 10%)',
        label: color("orange")[0],
    },
    {
        color: 'hsl(30, 100%, 12.5%)',
        label: color("orange")[1],
    },
    {
        color: 'hsl(30, 100%, 25%)',
        label: color("orange")[2],
    },
    {
        color: 'hsl(30, 100%, 37.5%)',
        label: color("orange")[3],
    },
    {
        color: 'hsl(30, 100%, 50%)',
        label: color("orange")[4],
    },
    {
        color: 'hsl(30, 100%, 62.5%)',
        label: color("orange")[5],
    },
    {
        color: 'hsl(30, 100%, 75%)',
        label: color("orange")[6],
    },
    {
        color: 'hsl(30, 100%, 87.5%)',
        label: color("orange")[7],
    },
    {
        color: 'hsl(30, 100%, 90%)',
        label: color("orange")[8],
        hasBorder: true,
    },
    {
        color: 'hsl(60, 100%, 10%)',
        label: color("yellow")[0],
    },
    {
        color: 'hsl(60, 100%, 12.5%)',
        label: color("yellow")[1],
    },
    {
        color: 'hsl(60, 100%, 25%)',
        label: color("yellow")[2],
    },
    {
        color: 'hsl(60, 100%, 37.5%)',
        label: color("yellow")[3],
    },
    {
        color: 'hsl(60, 100%, 50%)',
        label: color("yellow")[4],
    },
    {
        color: 'hsl(60, 100%, 62.5%)',
        label: color("yellow")[5],
    },
    {
        color: 'hsl(60, 100%, 75%)',
        label: color("yellow")[6],
    },
    {
        color: 'hsl(60, 100%, 87.5%)',
        label: color("yellow")[7],
    },
    {
        color: 'hsl(60, 100%, 90%)',
        label: color("yellow")[8],
        hasBorder: true,
    },
    {
        color: 'hsl(90, 100%, 10%)',
        label: color("ygreen")[0],
    },
    {
        color: 'hsl(90, 100%, 12.5%)',
        label: color("ygreen")[1],
    },
    {
        color: 'hsl(90, 100%, 25%)',
        label: color("ygreen")[2],
    },
    {
        color: 'hsl(90, 100%, 37.5%)',
        label: color("ygreen")[3],
    },
    {
        color: 'hsl(90, 100%, 50%)',
        label: color("ygreen")[4],
    },
    {
        color: 'hsl(90, 100%, 62.5%)',
        label: color("ygreen")[5],
    },
    {
        color: 'hsl(90, 100%, 75%)',
        label: color("ygreen")[6],
    },
    {
        color: 'hsl(90, 100%, 87.5%)',
        label: color("ygreen")[7],
    },
    {
        color: 'hsl(90, 100%, 90%)',
        label: color("ygreen")[8],
        hasBorder: true,
    },
    {
        color: 'hsl(120, 100%, 10%)',
        label: color("green")[0],
    },
    {
        color: 'hsl(120, 100%, 12.5%)',
        label: color("green")[1],
    },
    {
        color: 'hsl(120, 100%, 25%)',
        label: color("green")[2],
    },
    {
        color: 'hsl(120, 100%, 37.5%)',
        label: color("green")[3],
    },
    {
        color: 'hsl(120, 100%, 50%)',
        label: color("green")[4],
    },
    {
        color: 'hsl(120, 100%, 62.5%)',
        label: color("green")[5],
    },
    {
        color: 'hsl(120, 100%, 75%)',
        label: color("green")[6],
    },
    {
        color: 'hsl(120, 100%, 87.5%)',
        label: color("green")[7],
    },
    {
        color: 'hsl(120, 100%, 90%)',
        label: color("green")[8],
        hasBorder: true,
    },
    {
        color: 'hsl(150, 100%, 10%)',
        label: color("bluegreen")[0],
    },
    {
        color: 'hsl(150, 100%, 12.5%)',
        label: color("bluegreen")[1],
    },
    {
        color: 'hsl(150, 100%, 25%)',
        label: color("bluegreen")[2],
    },
    {
        color: 'hsl(150, 100%, 37.5%)',
        label: color("bluegreen")[3],
    },
    {
        color: 'hsl(150, 100%, 50%)',
        label: color("bluegreen")[4],
    },
    {
        color: 'hsl(150, 100%, 62.5%)',
        label: color("bluegreen")[5],
    },
    {
        color: 'hsl(150, 100%, 75%)',
        label: color("bluegreen")[6],
    },
    {
        color: 'hsl(150, 100%, 87.5%)',
        label: color("bluegreen")[7],
    },
    {
        color: 'hsl(150, 100%, 90%)',
        label: color("bluegreen")[8],
        hasBorder: true,
    },
    {
        color: 'hsl(180, 100%, 10%)',
        label: color("lightblue")[0],
    },
    {
        color: 'hsl(180, 100%, 12.5%)',
        label: color("lightblue")[1],
    },
    {
        color: 'hsl(180, 100%, 25%)',
        label: color("lightblue")[2],
    },
    {
        color: 'hsl(180, 100%, 37.5%)',
        label: color("lightblue")[3],
    },
    {
        color: 'hsl(180, 100%, 50%)',
        label: color("lightblue")[4],
    },
    {
        color: 'hsl(180, 100%, 62.5%)',
        label: color("lightblue")[5],
    },
    {
        color: 'hsl(180, 100%, 75%)',
        label: color("lightblue")[6],
    },
    {
        color: 'hsl(180, 100%, 87.5%)',
        label: color("lightblue")[7],
    },
    {
        color: 'hsl(180, 100%, 90%)',
        label: color("lightblue")[8],
        hasBorder: true,
    },
    {
        color: 'hsl(210, 100%, 10%)',
        label: color("mpblue")[0],
    },
    {
        color: 'hsl(210, 100%, 12.5%)',
        label: color("mpblue")[1],
    },
    {
        color: 'hsl(210, 100%, 25%)',
        label: color("mpblue")[2],
    },
    {
        color: 'hsl(210, 100%, 37.5%)',
        label: color("mpblue")[3],
    },
    {
        color: 'hsl(210, 100%, 50%)',
        label: color("mpblue")[4],
    },
    {
        color: 'hsl(210, 100%, 62.5%)',
        label: color("mpblue")[5],
    },
    {
        color: 'hsl(210, 100%, 75%)',
        label: color("mpblue")[6],
    },
    {
        color: 'hsl(210, 100%, 87.5%)',
        label: color("mpblue")[7],
    },
    {
        color: 'hsl(210, 100%, 90%)',
        label: color("mpblue")[8],
        hasBorder: true,
    },
    {
        color: 'hsl(240, 100%, 10%)',
        label: color("blue")[0],
    },
    {
        color: 'hsl(240, 100%, 12.5%)',
        label: color("blue")[1],
    },
    {
        color: 'hsl(240, 100%, 25%)',
        label: color("blue")[2],
    },
    {
        color: 'hsl(240, 100%, 37.5%)',
        label: color("blue")[3],
    },
    {
        color: 'hsl(240, 100%, 50%)',
        label: color("blue")[4],
    },
    {
        color: 'hsl(240, 100%, 62.5%)',
        label: color("blue")[5],
    },
    {
        color: 'hsl(240, 100%, 75%)',
        label: color("blue")[6],
    },
    {
        color: 'hsl(240, 100%, 87.5%)',
        label: color("blue")[7],
    },
    {
        color: 'hsl(240, 100%, 90%)',
        label: color("blue")[8],
        hasBorder: true,
    },
    {
        color: 'hsl(270, 100%, 10%)',
        label: color("purple")[0],
    },
    {
        color: 'hsl(270, 100%, 12.5%)',
        label: color("purple")[1],
    },
    {
        color: 'hsl(270, 100%, 25%)',
        label: color("purple")[2],
    },
    {
        color: 'hsl(270, 100%, 37.5%)',
        label: color("purple")[3],
    },
    {
        color: 'hsl(270, 100%, 50%)',
        label: color("purple")[4],
    },
    {
        color: 'hsl(270, 100%, 62.5%)',
        label: color("purple")[5],
    },
    {
        color: 'hsl(270, 100%, 75%)',
        label: color("purple")[6],
    },
    {
        color: 'hsl(270, 100%, 87.5%)',
        label: color("purple")[7],
    },
    {
        color: 'hsl(270, 100%, 90%)',
        label: color("purple")[8],
        hasBorder: true,
    },
    {
        color: 'hsl(300, 100%, 10%)',
        label: color("pink")[0],
    },
    {
        color: 'hsl(300, 100%, 12.5%)',
        label: color("pink")[1],
    },
    {
        color: 'hsl(300, 100%, 25%)',
        label: color("pink")[2],
    },
    {
        color: 'hsl(300, 100%, 37.5%)',
        label: color("pink")[3],
    },
    {
        color: 'hsl(300, 100%, 50%)',
        label: color("pink")[4],
    },
    {
        color: 'hsl(300, 100%, 62.5%)',
        label: color("pink")[5],
    },
    {
        color: 'hsl(300, 100%, 75%)',
        label: color("pink")[6],
    },
    {
        color: 'hsl(300, 100%, 87.5%)',
        label: color("pink")[7],
    },
    {
        color: 'hsl(300, 100%, 90%)',
        label: color("pink")[8],
        hasBorder: true,
    },
    {
        color: 'hsl(330, 100%, 10%)',
        label: color("magenta")[0],
    },
    {
        color: 'hsl(330, 100%, 12.5%)',
        label: color("magenta")[1],
    },
    {
        color: 'hsl(330, 100%, 25%)',
        label: color("magenta")[2],
    },
    {
        color: 'hsl(330, 100%, 37.5%)',
        label: color("magenta")[3],
    },
    {
        color: 'hsl(330, 100%, 50%)',
        label: color("magenta")[4],
    },
    {
        color: 'hsl(330, 100%, 62.5%)',
        label: color("magenta")[5],
    },
    {
        color: 'hsl(330, 100%, 75%)',
        label: color("magenta")[6],
    },
    {
        color: 'hsl(330, 100%, 87.5%)',
        label: color("magenta")[7],
    },
    {
        color: 'hsl(330, 100%, 90%)',
        label: color("magenta")[8],
        hasBorder: true,
    },
]
