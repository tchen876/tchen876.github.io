/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'Text11',
                type: 'text',
                rect: ['168px', '24px','auto','auto','auto', 'auto'],
                text: "Summary Recruiting Report: 2014 Q4, Eastern US region",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 28, "rgba(102,102,102,1.00)", "400", "none", "normal"]
            },
            {
                id: 'Text3',
                type: 'text',
                rect: ['-21px', '288px','auto','auto','auto', 'auto'],
                text: "Number of Applicants",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 11, "rgba(102,102,102,1)", "400", "none", "normal"],
                transform: [[],['-90']]
            },
            {
                id: 'Text4',
                type: 'text',
                rect: ['-30px', '561px','auto','auto','auto', 'auto'],
                text: "Number of Applicants out",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 11, "rgba(102,102,102,1)", "400", "none", "normal"],
                transform: [[],['-90']]
            },
            {
                id: 'hire_target',
                type: 'group',
                rect: ['809', '460','100','26','auto', 'auto'],
                clip: ['rect(0px 100px 26px 0px)'],
                c: [
                {
                    id: 'target2',
                    type: 'text',
                    rect: ['1px', '10px','auto','auto','auto', 'auto'],
                    text: ".....",
                    align: "left",
                    font: ['\'Palatino Linotype\', \'Book Antigua\', Palatino, serif', 12, "rgba(5,143,251,1)", "400", "none", "normal"],
                    transform: [[],['90']]
                },
                {
                    id: 'target2Copy',
                    type: 'text',
                    rect: ['84px', '10px','auto','auto','auto', 'auto'],
                    text: ".....",
                    align: "left",
                    font: ['\'Palatino Linotype\', \'Book Antigua\', Palatino, serif', 12, "rgba(5,143,251,1)", "400", "none", "normal"],
                    transform: [[],['90']]
                },
                {
                    id: 'target',
                    type: 'text',
                    rect: ['5px', '0px','83px','18px','auto', 'auto'],
                    text: "............................",
                    align: "left",
                    font: ['Palatino Linotype, Book Antigua, Palatino, serif', 12, "rgba(5,143,251,1.00)", "400", "none", "normal"]
                }]
            },
            {
                id: 'Text9',
                type: 'text',
                rect: ['52px', '136px','auto','auto','auto', 'auto'],
                text: "100<br>90<br>80<br>70<br>60<br>50<br>40<br>30<br>20<br>10<br>0<br>-10<br>-20<br>-30<br>-40",
                align: "right",
                font: ['Arial, Helvetica, sans-serif', 11, "rgba(118,118,118,1.00)", "400", "none", "normal"]
            },
            {
                id: 'bar1',
                type: 'rect',
                rect: ['84px', '178px','84px','313px','auto', 'auto'],
                fill: ["rgba(124,186,57,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'review',
                type: 'image',
                rect: ['99px', '109px','54px','52px','auto', 'auto'],
                clip: ['rect(0px 54px 52px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"review.gif",'0px','0px']
            },
            {
                id: 'gray1',
                type: 'rect',
                rect: ['176px', '448px','84px','43px','auto', 'auto'],
                fill: ["rgba(105,123,141,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'dividedLine',
                type: 'text',
                rect: ['175px', '496px','auto','auto','auto', 'auto'],
                clip: ['rect(0px 85px 22px 0px)'],
                text: ".................",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 18, "rgba(167,167,167,1.00)", "400", "none", "normal"]
            },
            {
                id: 'out1',
                type: 'text',
                rect: ['205px', '503px','auto','auto','auto', 'auto'],
                text: "11",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 24, "rgba(255,255,255,1)", "400", "none", "normal"]
            },
            {
                id: 'outED',
                type: 'group',
                rect: ['193', '545','60','66','auto', 'auto'],
                clip: ['rect(0px 60px 66px 0px)'],
                c: [
                {
                    id: '_5education',
                    type: 'text',
                    rect: ['6px', '0px','auto','auto','auto', 'auto'],
                    text: "5",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 18, "rgba(51,51,51,1)", "400", "none", "normal"],
                    transform: [[],['45']]
                },
                {
                    id: 'education',
                    type: 'text',
                    rect: ['7px', '33px','auto','auto','auto', 'auto'],
                    text: "Education",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 12, "rgba(51,51,51,1.00)", "400", "none", "normal"],
                    transform: [[],['45']]
                }]
            },
            {
                id: 'vlineED',
                type: 'group',
                rect: ['194', '500','3','50','auto', 'auto'],
                clip: ['rect(0px 3px 49.99996566772461px 0px)'],
                c: [
                {
                    id: 'Ellipse2Copy2',
                    type: 'ellipse',
                    rect: ['0px', '47px','3px','3px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(68,68,68,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Ellipse2Copy3',
                    type: 'ellipse',
                    rect: ['0px', '0px','3px','3px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(51,51,51,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'vlineCopy',
                    type: 'rect',
                    rect: ['1px', '2px','1px','47px','auto', 'auto'],
                    fill: ["rgba(85,85,85,1.00)"],
                    stroke: [0,"rgb(54, 54, 54)","solid"]
                }]
            },
            {
                id: 'vlineEX',
                type: 'group',
                rect: ['183', '519','3','50','auto', 'auto'],
                clip: ['rect(0px 3px 50.00017547607422px 0px)'],
                c: [
                {
                    id: 'Ellipse2',
                    type: 'ellipse',
                    rect: ['0px', '47px','3px','3px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(68,68,68,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Ellipse2Copy',
                    type: 'ellipse',
                    rect: ['0px', '0px','3px','3px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(51,51,51,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'vline',
                    type: 'rect',
                    rect: ['1px', '1px','1px','47px','auto', 'auto'],
                    fill: ["rgba(68,68,68,1.00)"],
                    stroke: [0,"rgb(54, 54, 54)","solid"]
                }]
            },
            {
                id: 'outEX',
                type: 'group',
                rect: ['177', '568','68','68','auto', 'auto'],
                clip: ['rect(0px 67.6834716796875px 67.68367767333984px 0px)'],
                c: [
                {
                    id: '_6ex',
                    type: 'text',
                    rect: ['6px', '0px','auto','auto','auto', 'auto'],
                    text: "6",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 18, "rgba(51,51,51,1)", "400", "none", "normal"],
                    transform: [[],['45']]
                },
                {
                    id: 'Experience',
                    type: 'text',
                    rect: ['10px', '33px','auto','auto','auto', 'auto'],
                    text: "Experience",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 12, "rgba(51,51,51,1)", "400", "none", "normal"],
                    transform: [[],['45']]
                }]
            },
            {
                id: 'outQulit',
                type: 'group',
                rect: ['177', '568','68','68','auto', 'auto'],
                clip: ['rect(0px 67.6834716796875px 67.68367767333984px 0px)'],
                c: [
                {
                    id: '_6qual',
                    type: 'text',
                    rect: ['6px', '0px','auto','auto','auto', 'auto'],
                    text: "12<br>",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 18, "rgba(51,51,51,1)", "400", "none", "normal"],
                    transform: [[],['45']]
                },
                {
                    id: 'qual_1',
                    type: 'text',
                    rect: ['22px', '26px','auto','auto','auto', 'auto'],
                    text: "Qual 2",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 12, "rgba(51,51,51,1)", "400", "none", "normal"],
                    transform: [[],['45']]
                }]
            },
            {
                id: 'outQulitCopy',
                type: 'group',
                rect: ['177', '568','68','68','auto', 'auto'],
                clip: ['rect(0px 67.6834716796875px 67.68367767333984px 0px)'],
                c: [
                {
                    id: '_6qualCopy',
                    type: 'text',
                    rect: ['6px', '0px','auto','auto','auto', 'auto'],
                    text: "26<br>",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 18, "rgba(51,51,51,1)", "400", "none", "normal"],
                    transform: [[],['45']]
                },
                {
                    id: 'qual_1Copy',
                    type: 'text',
                    rect: ['22px', '26px','auto','auto','auto', 'auto'],
                    text: "Qual 1",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 12, "rgba(51,51,51,1)", "400", "none", "normal"],
                    transform: [[],['45']]
                }]
            },
            {
                id: 'bar2',
                type: 'rect',
                rect: ['84px', '178px','84px','313px','auto', 'auto'],
                fill: ["rgba(124,186,57,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'phoneScreen',
                type: 'image',
                rect: ['190px', '108px','91px','92px','auto', 'auto'],
                clip: ['rect(0px 91px 92px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"phoneScreen.gif",'0px','0px']
            },
            {
                id: '_93',
                type: 'text',
                rect: ['113px', '190px','auto','auto','auto', 'auto'],
                text: "93",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 24, "rgba(255,255,255,1.00)", "400", "none", "normal"]
            },
            {
                id: 'gray2',
                type: 'rect',
                rect: ['267px', '492px','84px','130px','auto', 'auto'],
                fill: ["rgba(105,123,141,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'dividedLineCopy',
                type: 'text',
                rect: ['266px', '562px','auto','auto','auto', 'auto'],
                clip: ['rect(0px 85px 22px 0px)'],
                text: ".................",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 18, "rgba(167,167,167,1.00)", "400", "none", "normal"]
            },
            {
                id: 'vline3',
                type: 'group',
                rect: ['287', '536','3','101','auto', 'auto'],
                clip: ['rect(0px 3px 100.99992370605469px 0px)'],
                c: [
                {
                    id: 'Rectangle',
                    type: 'rect',
                    rect: ['1px', '3px','1px','95px','auto', 'auto'],
                    fill: ["rgba(66,66,66,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Ellipse',
                    type: 'ellipse',
                    rect: ['0px', '98px','3px','3px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(66,66,66,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'EllipseCopy',
                    type: 'ellipse',
                    rect: ['0px', '0px','3px','3px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(66,66,66,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                }]
            },
            {
                id: 'vline3Copy',
                type: 'group',
                rect: ['275px', '566px','3','101','auto', 'auto'],
                clip: ['rect(0px 3px 101px 0px)'],
                c: [
                {
                    id: 'RectangleCopy',
                    type: 'rect',
                    rect: ['1px', '32px','1px','66px','auto', 'auto'],
                    fill: ["rgba(66,66,66,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'EllipseCopy3',
                    type: 'ellipse',
                    rect: ['0px', '96px','3px','3px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(66,66,66,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'EllipseCopy2',
                    type: 'ellipse',
                    rect: ['0px', '31px','3px','3px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(66,66,66,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                }]
            },
            {
                id: 'out38',
                type: 'text',
                rect: ['296px', '588px','auto','auto','auto', 'auto'],
                text: "38",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 24, "rgba(255,255,255,1)", "400", "none", "normal"]
            },
            {
                id: 'bar3',
                type: 'rect',
                rect: ['176px', '214px','84px','277px','auto', 'auto'],
                fill: ["rgba(124,186,57,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'managerReview',
                type: 'image',
                rect: ['281px', '224px','106px','106px','auto', 'auto'],
                clip: ['rect(0px 106px 106px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"managerReview.gif",'0px','0px']
            },
            {
                id: '_82',
                type: 'text',
                rect: ['205px', '226px','auto','auto','auto', 'auto'],
                text: "82<br>",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 24, "rgba(255,255,255,1)", "400", "none", "normal"]
            },
            {
                id: 'gray3',
                type: 'rect',
                rect: ['358px', '492px','84px','89px','auto', 'auto'],
                fill: ["rgba(105,123,141,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'skill',
                type: 'group',
                rect: ['384px', '596px','47','45','auto', 'auto'],
                clip: ['rect(0px 46.78384780883789px 44.784217834472656px 0px)'],
                c: [
                {
                    id: '_26skill',
                    type: 'text',
                    rect: ['6px', '0px','auto','auto','auto', 'auto'],
                    text: "9",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 18, "rgba(51,51,51,1)", "400", "none", "normal"],
                    transform: [[],['45']]
                },
                {
                    id: 'skill1',
                    type: 'text',
                    rect: ['13px', '20px','auto','auto','auto', 'auto'],
                    text: "Skill 1",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 12, "rgba(51,51,51,1)", "400", "none", "normal"],
                    transform: [[],['45']]
                }]
            },
            {
                id: 'skillCopy',
                type: 'group',
                rect: ['372px', '624px','47','45','auto', 'auto'],
                clip: ['rect(0px 47px 45px 0px)'],
                c: [
                {
                    id: '_26skillCopy',
                    type: 'text',
                    rect: ['6px', '0px','auto','auto','auto', 'auto'],
                    text: "5",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 18, "rgba(51,51,51,1)", "400", "none", "normal"],
                    transform: [[],['45']]
                },
                {
                    id: 'skill1Copy',
                    type: 'text',
                    rect: ['13px', '20px','auto','auto','auto', 'auto'],
                    text: "Skill 2",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 12, "rgba(51,51,51,1)", "400", "none", "normal"],
                    transform: [[],['45']]
                }]
            },
            {
                id: 'skillCopy2',
                type: 'group',
                rect: ['362px', '655px','47','45','auto', 'auto'],
                clip: ['rect(0px 47px 45px 0px)'],
                c: [
                {
                    id: '_26skillCopy2',
                    type: 'text',
                    rect: ['6px', '0px','auto','auto','auto', 'auto'],
                    text: "11",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 18, "rgba(51,51,51,1)", "400", "none", "normal"],
                    transform: [[],['45']]
                },
                {
                    id: 'skill1Copy2',
                    type: 'text',
                    rect: ['20px', '22px','auto','auto','auto', 'auto'],
                    text: "Skill 3",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 12, "rgba(51,51,51,1)", "400", "none", "normal"],
                    transform: [[],['45']]
                }]
            },
            {
                id: 'dividedLineCopy2',
                type: 'text',
                rect: ['266px', '562px','auto','auto','auto', 'auto'],
                clip: ['rect(0px 85px 22px 0px)'],
                text: ".................",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 18, "rgba(167,167,167,1.00)", "400", "none", "normal"]
            },
            {
                id: 'dividedLineCopy3',
                type: 'text',
                rect: ['266px', '562px','auto','auto','auto', 'auto'],
                clip: ['rect(0px 85px 22px 0px)'],
                text: ".................",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 18, "rgba(167,167,167,1.00)", "400", "none", "normal"]
            },
            {
                id: 'vlineSkill1',
                type: 'group',
                rect: ['384', '505','3','94','auto', 'auto'],
                clip: ['rect(0px 3px 93.99996185302734px 0px)'],
                c: [
                {
                    id: 'vlineSkill',
                    type: 'rect',
                    rect: ['1px', '3px','1px','88px','auto', 'auto'],
                    fill: ["rgba(68,68,68,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Ellipse5Copy2',
                    type: 'ellipse',
                    rect: ['0px', '91px','3px','3px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(68,68,68,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Ellipse5Copy3',
                    type: 'ellipse',
                    rect: ['0px', '0px','3px','3px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(68,68,68,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                }]
            },
            {
                id: 'vlineSkill2',
                type: 'group',
                rect: ['375', '526','3','92','auto', 'auto'],
                clip: ['rect(0px 3px 91.9998550415039px 0px)'],
                c: [
                {
                    id: 'vlineSkillCopy',
                    type: 'rect',
                    rect: ['1px', '2px','1px','88px','auto', 'auto'],
                    fill: ["rgba(68,68,68,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Ellipse5',
                    type: 'ellipse',
                    rect: ['0px', '89px','3px','3px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(68,68,68,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Ellipse5Copy',
                    type: 'ellipse',
                    rect: ['0px', '0px','3px','3px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(68,68,68,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                }]
            },
            {
                id: 'vlineSkill3',
                type: 'group',
                rect: ['365', '557','3','94','auto', 'auto'],
                clip: ['rect(0px 3px 93.99996185302734px 0px)'],
                c: [
                {
                    id: 'vlineSkillCopy2',
                    type: 'rect',
                    rect: ['1px', '4px','1px','88px','auto', 'auto'],
                    fill: ["rgba(68,68,68,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Ellipse4',
                    type: 'ellipse',
                    rect: ['0px', '91px','3px','3px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(68,68,68,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Ellipse4Copy',
                    type: 'ellipse',
                    rect: ['0px', '0px','3px','3px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(68,68,68,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                }]
            },
            {
                id: 'out25',
                type: 'text',
                rect: ['387px', '548px','auto','auto','auto', 'auto'],
                text: "25",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 24, "rgba(255,255,255,1)", "400", "none", "normal"]
            },
            {
                id: 'bar4',
                type: 'rect',
                rect: ['267px', '341px','84px','150px','auto', 'auto'],
                fill: ["rgba(124,186,57,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'interviews',
                type: 'image',
                rect: ['380px', '349px','67px','65px','auto', 'auto'],
                clip: ['rect(0px 67px 65px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"interviews.gif",'0px','0px']
            },
            {
                id: 'gray4',
                type: 'rect',
                rect: ['449px', '492px','84px','18px','auto', 'auto'],
                fill: ["rgba(105,123,141,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'vlineAssessment',
                type: 'group',
                rect: ['464px', '499','2px','26','auto', 'auto'],
                clip: ['rect(0px 2px 26.00005531311035px 0px)'],
                c: [
                {
                    id: 'vlineassessment',
                    type: 'rect',
                    rect: ['1px', '3px','1px','21px','auto', 'auto'],
                    fill: ["rgba(68,68,68,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Ellipse6',
                    type: 'ellipse',
                    rect: ['0px', '23px','3px','3px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(68,68,68,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Ellipse6Copy',
                    type: 'ellipse',
                    rect: ['0px', '0px','3px','3px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(68,68,68,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                }]
            },
            {
                id: 'numberAss',
                type: 'group',
                rect: ['384', '596','47','45','auto', 'auto'],
                clip: ['rect(0px 46.783851623535156px 44.7840461730957px 0px)'],
                c: [
                {
                    id: '_26skillCopy3',
                    type: 'text',
                    rect: ['6px', '0px','auto','auto','auto', 'auto'],
                    text: "5",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 18, "rgba(51,51,51,1)", "400", "none", "normal"],
                    transform: [[],['45']]
                },
                {
                    id: 'outNumAssessment',
                    type: 'text',
                    rect: ['13px', '20px','auto','auto','auto', 'auto'],
                    text: "Skill 1",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 12, "rgba(51,51,51,1)", "400", "none", "normal"],
                    transform: [[],['45']]
                }]
            },
            {
                id: 'numberAssCopy',
                type: 'group',
                rect: ['384', '596','47','45','auto', 'auto'],
                clip: ['rect(0px 46.783851623535156px 44.7840461730957px 0px)'],
                c: [
                {
                    id: '_26skillCopy4',
                    type: 'text',
                    rect: ['6px', '0px','auto','auto','auto', 'auto'],
                    text: "4",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 18, "rgba(51,51,51,1)", "400", "none", "normal"],
                    transform: [[],['45']]
                },
                {
                    id: 'outNumAssessmentCopy',
                    type: 'text',
                    rect: ['8px', '29px','auto','auto','auto', 'auto'],
                    text: "Relocation",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 12, "rgba(51,51,51,1)", "400", "none", "normal"],
                    transform: [[],['45']]
                }]
            },
            {
                id: 'out5',
                type: 'text',
                rect: ['491', '493px','7px','auto','auto', 'auto'],
                text: "5",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 14, "rgba(255,255,255,1)", "400", "none", "normal"]
            },
            {
                id: 'bar5',
                type: 'rect',
                rect: ['358px', '428px','84px','63px','auto', 'auto'],
                fill: ["rgba(124,186,57,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Text2',
                type: 'text',
                rect: ['387px', '437px','auto','auto','auto', 'auto'],
                text: "19",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 24, "rgba(255,255,255,1.00)", "400", "none", "normal"]
            },
            {
                id: '_44',
                type: 'text',
                rect: ['296px', '353px','auto','auto','auto', 'auto'],
                text: "44",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 24, "rgba(255,255,255,1.00)", "400", "none", "normal"]
            },
            {
                id: 'assessment',
                type: 'image',
                rect: ['464px', '337px','79px','82px','auto', 'auto'],
                clip: ['rect(0px 79px 82px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"assessment.gif",'0px','0px']
            },
            {
                id: 'gray5',
                type: 'rect',
                rect: ['540px', '492px','84px','16px','auto', 'auto'],
                fill: ["rgba(105,123,141,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'vlineAssessmentCopy',
                type: 'group',
                rect: ['464px', '499','2px','26','auto', 'auto'],
                clip: ['rect(0px 2px 26.00005531311035px 0px)'],
                c: [
                {
                    id: 'vlineassessmentCopy',
                    type: 'rect',
                    rect: ['1px', '3px','1px','21px','auto', 'auto'],
                    fill: ["rgba(68,68,68,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Ellipse6Copy3',
                    type: 'ellipse',
                    rect: ['0px', '23px','3px','3px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(68,68,68,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Ellipse6Copy2',
                    type: 'ellipse',
                    rect: ['0px', '0px','3px','3px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(68,68,68,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                }]
            },
            {
                id: 'out4',
                type: 'text',
                rect: ['578px', '492px','7px','auto','auto', 'auto'],
                text: "4",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 14, "rgba(255,255,255,1)", "400", "none", "normal"]
            },
            {
                id: 'bar6',
                type: 'rect',
                rect: ['449px', '444px','84px','47px','auto', 'auto'],
                fill: ["rgba(124,186,57,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_14',
                type: 'text',
                rect: ['478px', '453px','auto','auto','auto', 'auto'],
                text: "14",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 24, "rgba(255,255,255,1)", "400", "none", "normal"]
            },
            {
                id: 'preOffer',
                type: 'image',
                rect: ['554', '386px','62px','61px','auto', 'auto'],
                clip: ['rect(0px 62px 61px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"preOffer.gif",'0px','0px']
            },
            {
                id: 'gray6',
                type: 'rect',
                rect: ['631px', '492px','84px','16px','auto', 'auto'],
                fill: ["rgba(105,123,141,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'offerNumber',
                type: 'group',
                rect: ['638px', '522','64','63','auto', 'auto'],
                clip: ['rect(0px 63.976253509521484px 62.9764518737793px 0px)'],
                c: [
                {
                    id: '_26skillCopy5',
                    type: 'text',
                    rect: ['6px', '0px','auto','auto','auto', 'auto'],
                    text: "4",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 18, "rgba(51,51,51,1)", "400", "none", "normal"],
                    transform: [[],['45']]
                },
                {
                    id: 'outNumAssessmentCopy2',
                    type: 'text',
                    rect: ['6px', '37px','auto','auto','auto', 'auto'],
                    text: "Compensation",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 12, "rgba(51,51,51,1)", "400", "none", "normal"],
                    transform: [[],['45']]
                }]
            },
            {
                id: 'vlineAssessmentCopy2',
                type: 'group',
                rect: ['464px', '499','2px','26','auto', 'auto'],
                clip: ['rect(0px 2px 26.00005531311035px 0px)'],
                c: [
                {
                    id: 'vlineassessmentCopy2',
                    type: 'rect',
                    rect: ['1px', '3px','1px','21px','auto', 'auto'],
                    fill: ["rgba(68,68,68,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Ellipse6Copy5',
                    type: 'ellipse',
                    rect: ['0px', '23px','3px','3px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(68,68,68,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Ellipse6Copy4',
                    type: 'ellipse',
                    rect: ['0px', '0px','3px','3px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(68,68,68,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                }]
            },
            {
                id: 'out6',
                type: 'text',
                rect: ['670px', '492px','auto','auto','auto', 'auto'],
                text: "4",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 14, "rgba(255,255,255,1)", "400", "none", "normal"]
            },
            {
                id: 'bar7',
                type: 'rect',
                rect: ['540px', '459px','84px','32px','auto', 'auto'],
                fill: ["rgba(124,186,57,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: '_10',
                type: 'text',
                rect: ['571px', '464px','auto','auto','auto', 'auto'],
                text: "10",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 20, "rgba(255,255,255,1)", "400", "none", "normal"]
            },
            {
                id: 'offer',
                type: 'image',
                rect: ['649px', '423px','36px','36px','auto', 'auto'],
                clip: ['rect(0px 36px 36px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"offer.gif",'0px','0px']
            },
            {
                id: 'gray7',
                type: 'rect',
                rect: ['722px', '492px','84px','3px','auto', 'auto'],
                fill: ["rgba(105,123,141,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'offerNumberCopy',
                type: 'group',
                rect: ['638px', '522','64','63','auto', 'auto'],
                clip: ['rect(0px 63.976253509521484px 62.9764518737793px 0px)'],
                c: [
                {
                    id: '_26skillCopy6',
                    type: 'text',
                    rect: ['6px', '0px','auto','auto','auto', 'auto'],
                    text: "1",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 18, "rgba(51,51,51,1)", "400", "none", "normal"],
                    transform: [[],['45']]
                },
                {
                    id: 'outNumAssessmentCopy3',
                    type: 'text',
                    rect: ['11px', '22px','auto','auto','auto', 'auto'],
                    text: "Bonus",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 12, "rgba(51,51,51,1)", "400", "none", "normal"],
                    transform: [[],['45']]
                }]
            },
            {
                id: 'vlineAssessmentCopy3',
                type: 'group',
                rect: ['464px', '499','2px','26','auto', 'auto'],
                clip: ['rect(0px 2px 26.00005531311035px 0px)'],
                c: [
                {
                    id: 'vlineassessmentCopy3',
                    type: 'rect',
                    rect: ['1px', '3px','1px','12px','auto', 'auto'],
                    fill: ["rgba(68,68,68,1.00)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Ellipse6Copy7',
                    type: 'ellipse',
                    rect: ['0px', '15px','3px','3px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(68,68,68,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                },
                {
                    id: 'Ellipse6Copy6',
                    type: 'ellipse',
                    rect: ['0px', '0px','3px','3px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(68,68,68,1)"],
                    stroke: [0,"rgb(0, 0, 0)","none"]
                }]
            },
            {
                id: 'bar8',
                type: 'rect',
                rect: ['631px', '472px','84px','19px','auto', 'auto'],
                fill: ["rgba(124,186,57,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'bar9',
                type: 'rect',
                rect: ['722px', '475px','84px','16px','auto', 'auto'],
                fill: ["rgba(124,186,57,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'number_offer',
                type: 'text',
                rect: ['668px', '472px','auto','auto','auto', 'auto'],
                text: "6",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 16, "rgba(255,255,255,1)", "400", "none", "normal"]
            },
            {
                id: 'hired2',
                type: 'image',
                rect: ['827px', '420px','42px','42px','auto', 'auto'],
                clip: ['rect(0px 42px 42px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"hired.gif",'0px','0px']
            },
            {
                id: 'number_finalChecks',
                type: 'text',
                rect: ['760px', '475px','auto','auto','auto', 'auto'],
                text: "5",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 14, "rgba(255,255,255,1.00)", "400", "none", "normal"]
            },
            {
                id: 'number_hired',
                type: 'text',
                rect: ['852px', '477px','auto','auto','auto', 'auto'],
                text: "4",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 12, "rgba(255,255,255,1)", "400", "none", "normal"]
            },
            {
                id: 'finalChecks',
                type: 'image',
                rect: ['738px', '384px','84px','80px','auto', 'auto'],
                clip: ['rect(0px 84px 80px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"finalChecks.gif",'0px','0px']
            },
            {
                id: 'hwhitreline',
                type: 'rect',
                rect: ['84px', '491px','892px','1px','auto', 'auto'],
                fill: ["rgba(68,68,68,1)",[270,[['rgba(255,255,255,1.00)',0],['rgba(255,255,255,1.00)',100]]]],
                stroke: [0,"rgb(54, 54, 54)","none"]
            },
            {
                id: 'details',
                type: 'rect',
                rect: ['auto', 'auto','auto','auto','406px', '502px']
            },
            {
                id: 'targeted',
                type: 'group',
                rect: ['902', '458','124','67','auto', 'auto'],
                clip: ['rect(0px 124px 67px 0px)'],
                c: [
                {
                    id: 'targetBox',
                    type: 'image',
                    rect: ['0px', '0px','124px','33px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"target.png",'0px','0px']
                },
                {
                    id: 'trgeted',
                    type: 'text',
                    rect: ['39px', '6px','auto','auto','auto', 'auto'],
                    text: " Targeted",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 18, "rgba(51,153,204,1.00)", "400", "none", "normal"]
                },
                {
                    id: '_6',
                    type: 'text',
                    rect: ['17px', '0px','auto','auto','auto', 'auto'],
                    text: "6",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 30, "rgba(51,153,204,1)", "400", "none", "normal"]
                },
                {
                    id: '_4',
                    type: 'text',
                    rect: ['17px', '31px','auto','auto','auto', 'auto'],
                    text: "4",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 30, "rgba(124,186,57,1.00)", "400", "none", "normal"]
                },
                {
                    id: 'hired',
                    type: 'text',
                    rect: ['41px', '40px','auto','auto','auto', 'auto'],
                    text: "Hired",
                    align: "left",
                    font: ['Arial, Helvetica, sans-serif', 18, "rgba(124,186,57,1)", "400", "none", "normal"]
                }]
            }],
            symbolInstances: [
            {
                id: 'details',
                symbolName: 'details',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_qual_1Copy}": [
                ["style", "top", '26px'],
                ["style", "left", '22px'],
                ["transform", "rotateZ", '45deg']
            ],
            "${_gray7}": [
                ["style", "top", '488px'],
                ["style", "opacity", '0']
            ],
            "${__6}": [
                ["style", "top", '0px'],
                ["style", "left", '17px'],
                ["style", "font-size", '30px']
            ],
            "${_vline3Copy}": [
                ["style", "top", '566px'],
                ["style", "left", '275px'],
                ["style", "clip", [0,3,0,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${__26skillCopy4}": [
                ["style", "top", '0px'],
                ["style", "left", '6px'],
                ["transform", "rotateZ", '45deg']
            ],
            "${__26skillCopy2}": [
                ["style", "top", '0px'],
                ["style", "left", '6px'],
                ["transform", "rotateZ", '45deg']
            ],
            "${_vlineassessment}": [
                ["style", "height", '21px'],
                ["style", "top", '3px'],
                ["style", "left", '1px'],
                ["color", "background-color", 'rgba(68,68,68,1.00)']
            ],
            "${_Ellipse}": [
                ["style", "height", '3px'],
                ["style", "top", '98px'],
                ["style", "left", '0px'],
                ["style", "width", '3px']
            ],
            "${_details}": [
                ["style", "top", 'auto'],
                ["style", "bottom", '-1667px'],
                ["style", "right", '-4018px'],
                ["style", "left", 'auto'],
                ["style", "opacity", '0']
            ],
            "${_dividedLineCopy3}": [
                ["color", "color", 'rgba(167,167,167,1)'],
                ["style", "top", '522px'],
                ["style", "clip", [0,0,22,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '358px']
            ],
            "${_EllipseCopy2}": [
                ["style", "height", '3px'],
                ["style", "top", '31px'],
                ["style", "left", '0px'],
                ["style", "width", '3px']
            ],
            "${_skill1}": [
                ["style", "top", '20px'],
                ["style", "left", '13px'],
                ["transform", "rotateZ", '45deg']
            ],
            "${_vlineSkill}": [
                ["style", "top", '3px'],
                ["style", "height", '88px'],
                ["style", "left", '1px'],
                ["color", "background-color", 'rgba(68,68,68,1.00)']
            ],
            "${_Ellipse2Copy2}": [
                ["style", "top", '47px'],
                ["color", "background-color", 'rgba(68,68,68,1.00)'],
                ["style", "border-width", '0px'],
                ["style", "border-style", 'none'],
                ["style", "height", '3px'],
                ["color", "border-color", 'rgba(54,54,54,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '3px']
            ],
            "${_skillCopy2}": [
                ["style", "top", '652px'],
                ["style", "left", '360px'],
                ["style", "clip", [0,0,0,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_vlineSkillCopy}": [
                ["style", "height", '88px'],
                ["color", "background-color", 'rgba(68,68,68,1.00)'],
                ["style", "left", '1px'],
                ["style", "top", '2px']
            ],
            "${_bar6}": [
                ["style", "top", '446px'],
                ["style", "height", '45px'],
                ["style", "opacity", '0'],
                ["style", "left", '449px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_EllipseCopy}": [
                ["style", "top", '0px'],
                ["style", "height", '3px'],
                ["style", "left", '0px'],
                ["style", "width", '3px']
            ],
            "${_vlineEX}": [
                ["style", "clip", [0,3,0,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${__14}": [
                ["style", "top", '453px'],
                ["style", "opacity", '0'],
                ["style", "left", '478px']
            ],
            "${_dividedLineCopy}": [
                ["style", "top", '562px'],
                ["color", "color", 'rgba(167,167,167,1)'],
                ["style", "left", '266px'],
                ["style", "clip", [0,0,22,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_gray1}": [
                ["style", "height", '43px'],
                ["style", "opacity", '0'],
                ["color", "background-color", 'rgba(105,123,141,1.00)'],
                ["style", "top", '448px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '1050px'],
                ["style", "height", '730px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Ellipse6Copy3}": [
                ["style", "top", '23px'],
                ["style", "height", '3px'],
                ["style", "left", '0px'],
                ["style", "width", '3px']
            ],
            "${_preOffer}": [
                ["style", "top", '386px'],
                ["style", "clip", [61,0,61,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_Ellipse2}": [
                ["style", "top", '47px'],
                ["color", "background-color", 'rgba(68,68,68,1.00)'],
                ["style", "border-width", '0px'],
                ["style", "border-style", 'none'],
                ["style", "height", '3px'],
                ["color", "border-color", 'rgba(54,54,54,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '3px']
            ],
            "${_hired2}": [
                ["style", "top", '420px'],
                ["style", "left", '827px'],
                ["style", "clip", [42,0,42,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_education}": [
                ["style", "top", '33px'],
                ["transform", "rotateZ", '45deg'],
                ["color", "color", 'rgba(51,51,51,1.00)'],
                ["style", "left", '7px'],
                ["style", "font-size", '12px']
            ],
            "${_vlineED}": [
                ["style", "clip", [0,3,0,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${__5education}": [
                ["style", "top", '0px'],
                ["transform", "skewY", '0deg'],
                ["transform", "rotateZ", '45deg'],
                ["style", "left", '6px'],
                ["style", "font-size", '18px']
            ],
            "${_vlineAssessmentCopy2}": [
                ["style", "clip", [0,3,0,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '641px'],
                ["style", "width", '2px']
            ],
            "${_Text4}": [
                ["style", "top", '561px'],
                ["style", "left", '-30px'],
                ["transform", "rotateZ", '-90deg']
            ],
            "${_target2Copy}": [
                ["style", "top", '10px'],
                ["transform", "rotateZ", '90deg'],
                ["style", "left", '84px'],
                ["style", "text-indent", '0px']
            ],
            "${_bar8}": [
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "height", '19px'],
                ["style", "opacity", '0'],
                ["style", "left", '631px'],
                ["style", "top", '472px']
            ],
            "${_targeted}": [
                ["style", "clip", [0,0,67,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_Text9}": [
                ["style", "line-height", '34px'],
                ["style", "text-align", 'right'],
                ["style", "top", '136px'],
                ["color", "color", 'rgba(118,118,118,1.00)'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '52px'],
                ["style", "font-size", '11px']
            ],
            "${_hwhitreline}": [
                ["style", "top", '491px'],
                ["gradient", "background-image", [270,[['rgba(255,255,255,1.00)',0],['rgba(255,255,255,1.00)',100]]]],
                ["style", "left", '84px'],
                ["style", "width", '892px']
            ],
            "${_dividedLine}": [
                ["style", "top", '496px'],
                ["style", "left", '175px'],
                ["style", "clip", [0,0,22,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["color", "color", 'rgba(167,167,167,1.00)']
            ],
            "${_outEX}": [
                ["style", "clip", [0,67.683471679688,0,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_RectangleCopy}": [
                ["style", "top", '32px'],
                ["color", "background-color", 'rgba(66,66,66,1.00)'],
                ["style", "left", '1px'],
                ["style", "height", '66px']
            ],
            "${_skill1Copy}": [
                ["style", "top", '20px'],
                ["style", "left", '13px'],
                ["transform", "rotateZ", '45deg']
            ],
            "${__6ex}": [
                ["style", "top", '0px'],
                ["style", "left", '6px'],
                ["transform", "rotateZ", '45deg']
            ],
            "${_Rectangle}": [
                ["style", "height", '95px'],
                ["style", "top", '3px'],
                ["style", "left", '1px'],
                ["color", "background-color", 'rgba(66,66,66,1.00)']
            ],
            "${_target}": [
                ["style", "top", '0px'],
                ["style", "letter-spacing", '0px'],
                ["style", "font-size", '12px'],
                ["color", "color", 'rgba(5,143,251,1.00)'],
                ["style", "height", '18px'],
                ["style", "font-family", 'Palatino Linotype, Book Antigua, Palatino, serif'],
                ["style", "left", '5px'],
                ["style", "width", '83px']
            ],
            "${_hired}": [
                ["style", "top", '40px'],
                ["style", "left", '41px'],
                ["style", "font-size", '18px']
            ],
            "${__4}": [
                ["color", "color", 'rgba(124,186,57,1.00)'],
                ["style", "left", '17px'],
                ["style", "top", '31px']
            ],
            "${_bar4}": [
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "height", '150px'],
                ["style", "opacity", '0'],
                ["style", "left", '267px'],
                ["style", "top", '341px']
            ],
            "${_bar9}": [
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "height", '16px'],
                ["style", "opacity", '0'],
                ["style", "left", '722px'],
                ["style", "top", '475px']
            ],
            "${_EllipseCopy3}": [
                ["style", "top", '96px'],
                ["style", "height", '3px'],
                ["style", "left", '0px'],
                ["style", "width", '3px']
            ],
            "${_bar5}": [
                ["style", "top", '428px'],
                ["style", "height", '63px'],
                ["style", "opacity", '0'],
                ["style", "left", '358px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_out5}": [
                ["style", "top", '493px'],
                ["style", "opacity", '0'],
                ["style", "font-size", '14px'],
                ["style", "width", '7px']
            ],
            "${_review}": [
                ["style", "top", '109px'],
                ["style", "left", '99px'],
                ["style", "clip", [52,0,52,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_out1}": [
                ["style", "top", '503px'],
                ["style", "opacity", '0'],
                ["style", "left", '205px'],
                ["style", "font-size", '24px']
            ],
            "${__82}": [
                ["style", "top", '226px'],
                ["style", "opacity", '0'],
                ["style", "left", '205px']
            ],
            "${_vlineSkill2}": [
                ["style", "clip", [0,3,0,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_vlineSkillCopy2}": [
                ["color", "background-color", 'rgba(68,68,68,1.00)'],
                ["style", "top", '4px'],
                ["style", "left", '1px'],
                ["style", "height", '88px']
            ],
            "${_outQulitCopy}": [
                ["style", "top", '638px'],
                ["style", "clip", [0,67.683471679688,0,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '284px']
            ],
            "${_gray6}": [
                ["style", "top", '475px'],
                ["style", "opacity", '0']
            ],
            "${_Text2}": [
                ["style", "top", '437px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '387px'],
                ["style", "font-size", '24px']
            ],
            "${_Ellipse6Copy7}": [
                ["style", "top", '15px'],
                ["style", "height", '3px'],
                ["style", "left", '0px'],
                ["style", "width", '3px']
            ],
            "${_bar2}": [
                ["style", "top", '178px'],
                ["style", "height", '313px'],
                ["style", "opacity", '0'],
                ["style", "left", '84px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_Experience}": [
                ["style", "top", '33px'],
                ["style", "left", '10px'],
                ["transform", "rotateZ", '45deg']
            ],
            "${_outNumAssessmentCopy}": [
                ["style", "top", '29px'],
                ["style", "left", '8px'],
                ["transform", "rotateZ", '45deg']
            ],
            "${_gray4}": [
                ["style", "top", '473px'],
                ["style", "opacity", '0'],
                ["style", "height", '18px']
            ],
            "${__6qual}": [
                ["style", "top", '0px'],
                ["style", "left", '6px'],
                ["transform", "rotateZ", '45deg']
            ],
            "${_gray3}": [
                ["style", "top", '402px'],
                ["style", "opacity", '0']
            ],
            "${_Ellipse4Copy}": [
                ["style", "top", '0px'],
                ["style", "height", '3px'],
                ["style", "left", '0px'],
                ["style", "width", '3px']
            ],
            "${_dividedLineCopy2}": [
                ["color", "color", 'rgba(167,167,167,1)'],
                ["style", "clip", [0,0,22,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '358px'],
                ["style", "top", '503px']
            ],
            "${_targetBox}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${__26skillCopy}": [
                ["style", "top", '0px'],
                ["style", "left", '6px'],
                ["transform", "rotateZ", '45deg']
            ],
            "${_hire_target}": [
                ["style", "clip", [0,100,0,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_Ellipse5Copy3}": [
                ["style", "top", '0px'],
                ["style", "height", '3px'],
                ["style", "left", '0px'],
                ["style", "width", '3px']
            ],
            "${_Text3}": [
                ["style", "top", '288px'],
                ["transform", "rotateZ", '-90deg'],
                ["style", "left", '-21px'],
                ["style", "font-size", '11px']
            ],
            "${_interviews}": [
                ["style", "top", '349px'],
                ["style", "left", '380px'],
                ["style", "clip", [65,0,65,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${__93}": [
                ["style", "top", '190px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '113px'],
                ["style", "font-size", '24px']
            ],
            "${_number_finalChecks}": [
                ["style", "top", '475px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '760px'],
                ["style", "font-size", '14px']
            ],
            "${_Ellipse6Copy6}": [
                ["style", "height", '3px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '3px']
            ],
            "${_vline3}": [
                ["style", "clip", [0,3,0,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_Ellipse6Copy5}": [
                ["style", "height", '3px'],
                ["style", "top", '23px'],
                ["style", "left", '0px'],
                ["style", "width", '3px']
            ],
            "${__44}": [
                ["style", "top", '353px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '296px'],
                ["style", "font-size", '24px']
            ],
            "${_vlineassessmentCopy3}": [
                ["style", "height", '12px'],
                ["style", "top", '3px'],
                ["style", "left", '1px'],
                ["color", "background-color", 'rgba(68,68,68,1.00)']
            ],
            "${_numberAssCopy}": [
                ["style", "top", '522px'],
                ["style", "clip", [0,0,0,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '547px']
            ],
            "${_out6}": [
                ["style", "top", '492px'],
                ["style", "opacity", '0'],
                ["style", "left", '670px']
            ],
            "${_vlineSkill1}": [
                ["style", "clip", [0,3,0,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_offer}": [
                ["style", "top", '423px'],
                ["style", "left", '649px'],
                ["style", "clip", [36,0,36,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_assessment}": [
                ["style", "top", '354px'],
                ["style", "left", '464px'],
                ["style", "clip", [82,0,82,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_number_offer}": [
                ["style", "top", '472px'],
                ["style", "opacity", '0'],
                ["style", "left", '670px'],
                ["style", "font-size", '16px']
            ],
            "${_outNumAssessmentCopy2}": [
                ["style", "top", '37px'],
                ["style", "left", '6px'],
                ["transform", "rotateZ", '45deg']
            ],
            "${_Ellipse6Copy}": [
                ["style", "top", '0px'],
                ["style", "height", '3px'],
                ["style", "left", '0px'],
                ["style", "width", '3px']
            ],
            "${_bar7}": [
                ["style", "top", '459px'],
                ["style", "height", '32px'],
                ["style", "opacity", '0'],
                ["style", "left", '540px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${__10}": [
                ["style", "top", '464px'],
                ["style", "opacity", '0'],
                ["style", "left", '571px'],
                ["style", "font-size", '20px']
            ],
            "${_outQulit}": [
                ["style", "top", '666px'],
                ["style", "clip", [0,67.683471679688,0,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '270px']
            ],
            "${__26skill}": [
                ["style", "top", '0px'],
                ["style", "left", '6px'],
                ["transform", "rotateZ", '45deg']
            ],
            "${_vlineSkill3}": [
                ["style", "clip", [0,3,0,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${__26skillCopy6}": [
                ["style", "top", '0px'],
                ["style", "left", '6px'],
                ["transform", "rotateZ", '45deg']
            ],
            "${_outNumAssessmentCopy3}": [
                ["style", "top", '22px'],
                ["style", "left", '11px'],
                ["transform", "rotateZ", '45deg']
            ],
            "${_offerNumberCopy}": [
                ["style", "top", '506px'],
                ["style", "clip", [0,0,0,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '730px']
            ],
            "${_qual_1}": [
                ["style", "top", '26px'],
                ["style", "left", '22px'],
                ["transform", "rotateZ", '45deg']
            ],
            "${_vlineAssessmentCopy3}": [
                ["style", "top", '492px'],
                ["style", "clip", [0,3,0,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '731px'],
                ["style", "width", '2px']
            ],
            "${_out38}": [
                ["style", "top", '588px'],
                ["style", "opacity", '0'],
                ["style", "left", '296px']
            ],
            "${_offerNumber}": [
                ["style", "left", '638px'],
                ["style", "clip", [0,0,0,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_Ellipse2Copy}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(51,51,51,1.00)'],
                ["style", "left", '0px'],
                ["color", "border-color", 'rgba(54,54,54,1.00)'],
                ["style", "height", '3px'],
                ["style", "border-style", 'none'],
                ["style", "border-width", '0px'],
                ["style", "width", '3px']
            ],
            "${_outED}": [
                ["style", "clip", [0,60,0,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_vlineassessmentCopy2}": [
                ["color", "background-color", 'rgba(68,68,68,1.00)'],
                ["style", "height", '21px'],
                ["style", "left", '1px'],
                ["style", "top", '3px']
            ],
            "${_finalChecks}": [
                ["style", "top", '384px'],
                ["style", "left", '738px'],
                ["style", "clip", [80,0,80,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_Ellipse6Copy4}": [
                ["style", "top", '0px'],
                ["style", "height", '3px'],
                ["style", "left", '0px'],
                ["style", "width", '3px']
            ],
            "${_Ellipse5Copy2}": [
                ["style", "height", '3px'],
                ["style", "top", '91px'],
                ["style", "left", '0px'],
                ["style", "width", '3px']
            ],
            "${_trgeted}": [
                ["color", "color", 'rgba(51,153,204,1.00)'],
                ["style", "top", '6px'],
                ["style", "left", '39px'],
                ["style", "font-size", '18px']
            ],
            "${_vlineCopy}": [
                ["color", "background-color", 'rgba(85,85,85,1.00)'],
                ["style", "top", '2px'],
                ["style", "height", '47px'],
                ["style", "left", '1px'],
                ["style", "border-width", '0px'],
                ["style", "width", '1px']
            ],
            "${_Text11}": [
                ["style", "top", '24px'],
                ["color", "color", 'rgba(102,102,102,1.00)'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '168px'],
                ["style", "font-size", '28px']
            ],
            "${_skillCopy}": [
                ["style", "top", '619px'],
                ["style", "left", '372px'],
                ["style", "clip", [0,0,0,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_vlineassessmentCopy}": [
                ["style", "top", '3px'],
                ["color", "background-color", 'rgba(68,68,68,1.00)'],
                ["style", "left", '1px'],
                ["style", "height", '21px']
            ],
            "${_bar3}": [
                ["style", "top", '214px'],
                ["style", "height", '277px'],
                ["style", "opacity", '0.008130081300813'],
                ["style", "left", '176px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_number_hired}": [
                ["style", "top", '477px'],
                ["style", "opacity", '0'],
                ["style", "left", '852px'],
                ["style", "font-size", '12px']
            ],
            "${_Ellipse2Copy3}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(51,51,51,1.00)'],
                ["style", "left", '0px'],
                ["color", "border-color", 'rgba(54,54,54,1.00)'],
                ["style", "height", '3px'],
                ["style", "border-style", 'none'],
                ["style", "border-width", '0px'],
                ["style", "width", '3px']
            ],
            "${_Ellipse6Copy2}": [
                ["style", "height", '3px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '3px']
            ],
            "${__6qualCopy}": [
                ["style", "top", '0px'],
                ["style", "left", '6px'],
                ["transform", "rotateZ", '45deg']
            ],
            "${_Ellipse4}": [
                ["style", "height", '3px'],
                ["style", "top", '91px'],
                ["style", "left", '0px'],
                ["style", "width", '3px']
            ],
            "${_vlineAssessmentCopy}": [
                ["style", "clip", [0,3,0,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '549px'],
                ["style", "width", '2px']
            ],
            "${_managerReview}": [
                ["style", "top", '224px'],
                ["style", "left", '281px'],
                ["style", "clip", [106,0,106,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_skill1Copy2}": [
                ["style", "top", '22px'],
                ["style", "left", '20px'],
                ["transform", "rotateZ", '45deg']
            ],
            "${_outNumAssessment}": [
                ["style", "top", '20px'],
                ["style", "left", '13px'],
                ["transform", "rotateZ", '45deg']
            ],
            "${__26skillCopy3}": [
                ["style", "top", '0px'],
                ["style", "left", '6px'],
                ["transform", "rotateZ", '45deg']
            ],
            "${_gray5}": [
                ["style", "top", '475px'],
                ["style", "opacity", '0']
            ],
            "${_vlineAssessment}": [
                ["style", "clip", [0,2,0,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '464px'],
                ["style", "width", '2px']
            ],
            "${_Ellipse6}": [
                ["style", "height", '3px'],
                ["style", "top", '23px'],
                ["style", "left", '0px'],
                ["style", "width", '3px']
            ],
            "${_numberAss}": [
                ["style", "top", '522px'],
                ["style", "left", '463px'],
                ["style", "clip", [0,0,0,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_bar1}": [
                ["color", "background-color", 'rgba(124,186,57,1.00)'],
                ["style", "bottom", 'auto'],
                ["transform", "scaleX", '1'],
                ["style", "left", '84px'],
                ["style", "width", '84px'],
                ["style", "top", '178px'],
                ["transform", "scaleY", '0'],
                ["style", "height", '313px'],
                ["style", "-webkit-transform-origin", [50,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_out4}": [
                ["style", "top", '492px'],
                ["style", "opacity", '0'],
                ["style", "left", '578px'],
                ["style", "width", '7px']
            ],
            "${_target2}": [
                ["style", "top", '10px'],
                ["style", "text-indent", '0px'],
                ["style", "left", '1px'],
                ["transform", "rotateZ", '90deg']
            ],
            "${_out25}": [
                ["style", "top", '548px'],
                ["style", "opacity", '0'],
                ["style", "left", '387px']
            ],
            "${_Ellipse5Copy}": [
                ["style", "top", '0px'],
                ["style", "height", '3px'],
                ["style", "left", '0px'],
                ["style", "width", '3px']
            ],
            "${_Ellipse5}": [
                ["style", "height", '3px'],
                ["style", "top", '89px'],
                ["style", "left", '0px'],
                ["style", "width", '3px']
            ],
            "${_skill}": [
                ["style", "top", '596px'],
                ["style", "left", '384px'],
                ["style", "clip", [0,0,0,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_gray2}": [
                ["style", "height", '130px'],
                ["style", "opacity", '0'],
                ["style", "top", '361px']
            ],
            "${_phoneScreen}": [
                ["style", "top", '108px'],
                ["style", "left", '190px'],
                ["style", "clip", [92,0,92,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_vline}": [
                ["color", "background-color", 'rgba(68,68,68,1.00)'],
                ["style", "top", '1px'],
                ["style", "height", '47px'],
                ["style", "border-width", '0px'],
                ["style", "left", '1px'],
                ["style", "width", '1px']
            ],
            "${__26skillCopy5}": [
                ["style", "top", '0px'],
                ["style", "left", '6px'],
                ["transform", "rotateZ", '45deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 10125,
            autoPlay: true,
            labels: {
                "start": 0
            },
            timeline: [
                { id: "eid512", tween: [ "style", "${_bar5}", "top", '446px', { fromValue: '428px'}], position: 4973, duration: 452 },
                { id: "eid1206", tween: [ "style", "${_gray3}", "opacity", '1', { fromValue: '0'}], position: 3745, duration: 49 },
                { id: "eid5447", tween: [ "style", "${_dividedLine}", "clip", [0,85,22,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,22,0]}], position: 1655, duration: 305 },
                { id: "eid83", tween: [ "style", "${_bar2}", "height", '277px', { fromValue: '313px'}], position: 1295, duration: 360 },
                { id: "eid1289", tween: [ "style", "${_gray4}", "top", '492px', { fromValue: '473px'}], position: 4973, duration: 452 },
                { id: "eid434", tween: [ "style", "${_bar4}", "opacity", '1', { fromValue: '0'}], position: 3080, duration: 665 },
                { id: "eid13851", tween: [ "style", "${_phoneScreen}", "clip", [0,91,92,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [92,0,92,0]}], position: 1655, duration: 345 },
                { id: "eid111", tween: [ "style", "${_bar2}", "opacity", '1', { fromValue: '0'}], position: 685, duration: 610 },
                { id: "eid13992", tween: [ "style", "${_finalChecks}", "clip", [0,84,80,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [80,0,80,0]}], position: 8425, duration: 317 },
                { id: "eid20089", tween: [ "style", "${_offerNumberCopy}", "clip", [0,49,46,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,0,0]}], position: 8500, duration: 161 },
                { id: "eid322", tween: [ "style", "${_bar3}", "left", '267px', { fromValue: '176px'}], position: 1655, duration: 695 },
                { id: "eid3268", tween: [ "style", "${_targeted}", "clip", [0,124,67,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,67,0]}], position: 9150, duration: 350 },
                { id: "eid17631", tween: [ "style", "${_outQulit}", "clip", [0,67.6834716796875,67.68367767333984,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,67.683471679688,0,0]}], position: 3539, duration: 330 },
                { id: "eid20078", tween: [ "style", "${_vlineAssessmentCopy2}", "clip", [0,3,26.00005531311,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,3,0,0]}], position: 7425, duration: 146 },
                { id: "eid433", tween: [ "style", "${_bar4}", "top", '428px', { fromValue: '341px'}], position: 3745, duration: 596 },
                { id: "eid20084", tween: [ "style", "${_vlineAssessmentCopy3}", "clip", [0,3,20,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,3,0,0]}], position: 8382, duration: 118 },
                { id: "eid13914", tween: [ "style", "${_managerReview}", "clip", [0,106,106,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [106,0,106,0]}], position: 3080, duration: 345 },
                { id: "eid3703", tween: [ "style", "${_out5}", "opacity", '1', { fromValue: '0'}], position: 5425, duration: 290 },
                { id: "eid19691", tween: [ "style", "${_skillCopy2}", "clip", [0,54,45,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,0,0]}], position: 5101, duration: 158 },
                { id: "eid722", tween: [ "style", "${_bar7}", "top", '472px', { fromValue: '459px'}], position: 7005, duration: 420 },
                { id: "eid20009", tween: [ "style", "${_vlineAssessmentCopy}", "clip", [0,3,26.00005531311,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,3,0,0]}], position: 6425, duration: 146 },
                { id: "eid2885", tween: [ "style", "${__82}", "opacity", '1', { fromValue: '0'}], position: 1655, duration: 345 },
                { id: "eid863", tween: [ "style", "${_bar9}", "left", '813px', { fromValue: '722px'}], position: 8425, duration: 500 },
                { id: "eid17899", tween: [ "style", "${_dividedLineCopy}", "clip", [0,85,22,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,22,0]}], position: 3080, duration: 160 },
                { id: "eid866", tween: [ "style", "${_bar9}", "top", '478px', { fromValue: '475px'}], position: 8925, duration: 400 },
                { id: "eid10", tween: [ "transform", "${_bar1}", "scaleY", '1', { fromValue: '0'}], position: 0, duration: 685 },
                { id: "eid1080", tween: [ "style", "${_gray2}", "opacity", '1', { fromValue: '0'}], position: 2350, duration: 45 },
                { id: "eid3706", tween: [ "style", "${_out4}", "opacity", '1', { fromValue: '0'}], position: 6425, duration: 328 },
                { id: "eid5384", tween: [ "style", "${_outEX}", "clip", [0,67.6834716796875,67.68367767333984,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,67.683471679688,0,0]}], position: 2170, duration: 330 },
                { id: "eid763", tween: [ "style", "${_bar8}", "-webkit-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 7425, duration: 0 },
                { id: "eid20274", tween: [ "style", "${_bar8}", "-moz-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 7425, duration: 0 },
                { id: "eid20275", tween: [ "style", "${_bar8}", "-ms-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 7425, duration: 0 },
                { id: "eid20276", tween: [ "style", "${_bar8}", "msTransformOrigin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 7425, duration: 0 },
                { id: "eid20277", tween: [ "style", "${_bar8}", "-o-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 7425, duration: 0 },
                { id: "eid5378", tween: [ "style", "${_vlineEX}", "clip", [0,3,50.00017547607422,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,3,0,0]}], position: 1900, duration: 270 },
                { id: "eid19685", tween: [ "style", "${_skillCopy}", "clip", [0,47,45,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,0,0]}], position: 4837, duration: 181 },
                { id: "eid19948", tween: [ "style", "${_vlineAssessment}", "clip", [0,2,26.00005531311035,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,2,0,0]}], position: 5442, duration: 146 },
                { id: "eid772", tween: [ "style", "${_bar8}", "height", '16px', { fromValue: '19px'}], position: 7970, duration: 455 },
                { id: "eid19941", tween: [ "style", "${_numberAss}", "clip", [0,46.783851623535156,44.7840461730957,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,0,0]}], position: 5588, duration: 179 },
                { id: "eid580", tween: [ "style", "${_bar6}", "left", '540px', { fromValue: '449px'}], position: 5425, duration: 602 },
                { id: "eid19679", tween: [ "style", "${_skill}", "clip", [0,46.78384780883789,44.784217834472656,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,0,0]}], position: 4552, duration: 198 },
                { id: "eid422", tween: [ "style", "${_bar4}", "left", '358px', { fromValue: '267px'}], position: 3080, duration: 665 },
                { id: "eid3642", tween: [ "style", "${__10}", "opacity", '1', { fromValue: '0'}], position: 6425, duration: 328 },
                { id: "eid721", tween: [ "style", "${_bar7}", "height", '19px', { fromValue: '32px'}], position: 7005, duration: 420 },
                { id: "eid6", tween: [ "style", "${_bar1}", "-webkit-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 0, duration: 0 },
                { id: "eid20278", tween: [ "style", "${_bar1}", "-moz-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 0, duration: 0 },
                { id: "eid20279", tween: [ "style", "${_bar1}", "-ms-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 0, duration: 0 },
                { id: "eid20280", tween: [ "style", "${_bar1}", "msTransformOrigin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 0, duration: 0 },
                { id: "eid20281", tween: [ "style", "${_bar1}", "-o-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 0, duration: 0 },
                { id: "eid771", tween: [ "style", "${_bar8}", "opacity", '1', { fromValue: '0'}], position: 7425, duration: 545 },
                { id: "eid19688", tween: [ "style", "${_vlineSkill3}", "clip", [0,3,93.99996185302734,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,3,0,0]}], position: 4917, duration: 184 },
                { id: "eid84", tween: [ "style", "${_bar2}", "top", '214px', { fromValue: '178px'}], position: 1295, duration: 360 },
                { id: "eid3709", tween: [ "style", "${_out6}", "opacity", '1', { fromValue: '0'}], position: 7425, duration: 400 },
                { id: "eid19682", tween: [ "style", "${_vlineSkill2}", "clip", [0,3,91.9998550415039,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,3,0,0]}], position: 4606, duration: 231 },
                { id: "eid19676", tween: [ "style", "${_vlineSkill1}", "clip", [0,3,93.99996185302734,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,3,0,0]}], position: 4341, duration: 211 },
                { id: "eid3697", tween: [ "style", "${_out38}", "opacity", '1', { fromValue: '0'}], position: 3080, duration: 345 },
                { id: "eid3619", tween: [ "style", "${__14}", "opacity", '1', { fromValue: '0'}], position: 5425, duration: 328 },
                { id: "eid719", tween: [ "style", "${_bar7}", "left", '631px', { fromValue: '540px'}], position: 6425, duration: 580 },
                { id: "eid1404", tween: [ "style", "${_gray6}", "opacity", '1', { fromValue: '0'}], position: 7005, duration: 48 },
                { id: "eid17672", tween: [ "style", "${_vline3Copy}", "clip", [0,3,101,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,3,0,0]}], position: 3365, duration: 174 },
                { id: "eid5381", tween: [ "style", "${_outED}", "clip", [0,60,66,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,60,0,0]}], position: 1900, duration: 270 },
                { id: "eid1292", tween: [ "style", "${_gray4}", "opacity", '1', { fromValue: '0'}], position: 4973, duration: 45 },
                { id: "eid13917", tween: [ "style", "${_interviews}", "clip", [0,67,65,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [65,0,65,0]}], position: 4341, duration: 334 },
                { id: "eid508", tween: [ "style", "${_bar5}", "-webkit-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 4341, duration: 0 },
                { id: "eid20282", tween: [ "style", "${_bar5}", "-moz-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 4341, duration: 0 },
                { id: "eid20283", tween: [ "style", "${_bar5}", "-ms-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 4341, duration: 0 },
                { id: "eid20284", tween: [ "style", "${_bar5}", "msTransformOrigin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 4341, duration: 0 },
                { id: "eid20285", tween: [ "style", "${_bar5}", "-o-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 4341, duration: 0 },
                { id: "eid432", tween: [ "style", "${_bar4}", "height", '63px', { fromValue: '150px'}], position: 3745, duration: 596 },
                { id: "eid13995", tween: [ "style", "${_hired2}", "clip", [0,42,42,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [42,0,42,0]}], position: 9325, duration: 350 },
                { id: "eid13989", tween: [ "style", "${_offer}", "clip", [0,36,36,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [36,0,36,0]}], position: 7425, duration: 400 },
                { id: "eid509", tween: [ "style", "${_bar5}", "left", '449px', { fromValue: '358px'}], position: 4341, duration: 632 },
                { id: "eid20083", tween: [ "style", "${_offerNumber}", "clip", [0,81,81,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,0,0]}], position: 7571, duration: 226 },
                { id: "eid1079", tween: [ "style", "${_gray2}", "top", '492px', { fromValue: '361px'}], position: 2350, duration: 730 },
                { id: "eid74", tween: [ "style", "${_bar2}", "left", '176px', { fromValue: '84px'}], position: 685, duration: 610 },
                { id: "eid329", tween: [ "style", "${_bar3}", "top", '341px', { fromValue: '214px'}], position: 2350, duration: 730 },
                { id: "eid5155", tween: [ "style", "${_vlineED}", "clip", [0,3,49.99996566772461,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,3,0,0]}], position: 1655, duration: 245 },
                { id: "eid13923", tween: [ "style", "${_assessment}", "clip", [0,79,82,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [82,0,82,0]}], position: 5386, duration: 367 },
                { id: "eid590", tween: [ "style", "${_bar6}", "top", '459px', { fromValue: '446px'}], position: 6027, duration: 398 },
                { id: "eid328", tween: [ "style", "${_bar3}", "height", '150px', { fromValue: '277px'}], position: 2350, duration: 730 },
                { id: "eid773", tween: [ "style", "${_bar8}", "top", '475px', { fromValue: '472px'}], position: 7970, duration: 455 },
                { id: "eid19641", tween: [ "style", "${_dividedLineCopy2}", "clip", [0,85,22,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,22,0]}], position: 4330, duration: 160 },
                { id: "eid770", tween: [ "style", "${_bar8}", "left", '722px', { fromValue: '631px'}], position: 7425, duration: 545 },
                { id: "eid1205", tween: [ "style", "${_gray3}", "top", '492px', { fromValue: '402px'}], position: 3745, duration: 596 },
                { id: "eid3553", tween: [ "style", "${__44}", "opacity", '1', { fromValue: '0'}], position: 3080, duration: 403 },
                { id: "eid720", tween: [ "style", "${_bar7}", "opacity", '1', { fromValue: '0'}], position: 6425, duration: 580 },
                { id: "eid17669", tween: [ "style", "${_vline3}", "clip", [0,3,100.99992370605469,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,3,0,0]}], position: 3080, duration: 160 },
                { id: "eid3616", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '0'}], position: 4341, duration: 334 },
                { id: "eid511", tween: [ "style", "${_bar5}", "height", '45px', { fromValue: '63px'}], position: 4973, duration: 452 },
                { id: "eid13181", tween: [ "style", "${_details}", "opacity", '1', { fromValue: '0'}], position: 10056, duration: 69 },
                { id: "eid2562", tween: [ "style", "${__93}", "opacity", '1', { fromValue: '0'}], position: 545, duration: 375 },
                { id: "eid864", tween: [ "style", "${_bar9}", "opacity", '1', { fromValue: '0'}], position: 8425, duration: 500 },
                { id: "eid3700", tween: [ "style", "${_out25}", "opacity", '1', { fromValue: '0'}], position: 4341, duration: 334 },
                { id: "eid1407", tween: [ "style", "${_gray7}", "top", '492px', { fromValue: '488px'}], position: 7970, duration: 455 },
                { id: "eid13808", tween: [ "style", "${_review}", "clip", [0,54,52,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [52,0,52,0]}], position: 685, duration: 315 },
                { id: "eid3674", tween: [ "style", "${_out1}", "opacity", '1', { fromValue: '0'}], position: 1655, duration: 305 },
                { id: "eid909", tween: [ "style", "${_gray1}", "top", '492px', { fromValue: '448px'}], position: 1295, duration: 360 },
                { id: "eid20011", tween: [ "style", "${_numberAssCopy}", "clip", [0,65,63,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,0,0]}], position: 6571, duration: 179 },
                { id: "eid1398", tween: [ "style", "${_gray5}", "opacity", '1', { fromValue: '0'}], position: 6027, duration: 61 },
                { id: "eid1395", tween: [ "style", "${_gray5}", "top", '492px', { fromValue: '475px'}], position: 6027, duration: 398 },
                { id: "eid1401", tween: [ "style", "${_gray6}", "top", '492px', { fromValue: '475px'}], position: 7005, duration: 420 },
                { id: "eid1410", tween: [ "style", "${_gray7}", "opacity", '1', { fromValue: '0'}], position: 7970, duration: 48 },
                { id: "eid13926", tween: [ "style", "${_preOffer}", "clip", [0,62,61,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [61,0,61,0]}], position: 6425, duration: 401 },
                { id: "eid17648", tween: [ "style", "${_outQulitCopy}", "clip", [0,67.6834716796875,67.68367767333984,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,67.683471679688,0,0]}], position: 3240, duration: 260 },
                { id: "eid3648", tween: [ "style", "${_number_finalChecks}", "opacity", '1', { fromValue: '0'}], position: 8425, duration: 317 },
                { id: "eid582", tween: [ "style", "${_bar6}", "opacity", '1', { fromValue: '0'}], position: 5425, duration: 602 },
                { id: "eid419", tween: [ "style", "${_bar4}", "-webkit-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 3080, duration: 0 },
                { id: "eid20286", tween: [ "style", "${_bar4}", "-moz-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 3080, duration: 0 },
                { id: "eid20287", tween: [ "style", "${_bar4}", "-ms-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 3080, duration: 0 },
                { id: "eid20288", tween: [ "style", "${_bar4}", "msTransformOrigin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 3080, duration: 0 },
                { id: "eid20289", tween: [ "style", "${_bar4}", "-o-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 3080, duration: 0 },
                { id: "eid865", tween: [ "style", "${_bar9}", "height", '13px', { fromValue: '16px'}], position: 8925, duration: 400 },
                { id: "eid3411", tween: [ "style", "${_hire_target}", "clip", [0,100,26,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,100,0,0]}], position: 9150, duration: 350 },
                { id: "eid856", tween: [ "style", "${_bar9}", "-webkit-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 8425, duration: 0 },
                { id: "eid20290", tween: [ "style", "${_bar9}", "-moz-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 8425, duration: 0 },
                { id: "eid20291", tween: [ "style", "${_bar9}", "-ms-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 8425, duration: 0 },
                { id: "eid20292", tween: [ "style", "${_bar9}", "msTransformOrigin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 8425, duration: 0 },
                { id: "eid20293", tween: [ "style", "${_bar9}", "-o-transform-origin", [50,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50,100]}], position: 8425, duration: 0 },
                { id: "eid589", tween: [ "style", "${_bar6}", "height", '32px', { fromValue: '45px'}], position: 6027, duration: 398 },
                { id: "eid19650", tween: [ "style", "${_dividedLineCopy3}", "clip", [0,85,22,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,22,0]}], position: 4330, duration: 160 },
                { id: "eid3645", tween: [ "style", "${_number_offer}", "opacity", '1', { fromValue: '0'}], position: 7425, duration: 285 },
                { id: "eid3651", tween: [ "style", "${_number_hired}", "opacity", '1', { fromValue: '0'}], position: 9675, duration: 250 },
                { id: "eid992", tween: [ "style", "${_gray1}", "opacity", '1', { fromValue: '0'}], position: 1295, duration: 40 },
                { id: "eid340", tween: [ "style", "${_bar3}", "opacity", '1', { fromValue: '0.008130081300813'}], position: 1655, duration: 695 },
                { id: "eid510", tween: [ "style", "${_bar5}", "opacity", '1', { fromValue: '0'}], position: 4341, duration: 632 }            ]
        }
    }
},
"details": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['93px', '57px', '969px', '659px', 'auto', 'auto'],
                    id: 'whiteBG',
                    stroke: [0, 'rgb(136, 136, 136)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    id: 'age',
                    type: 'image',
                    rect: ['80px', '70px', '970px', '600px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/age.jpg', '0px', '0px']
                },
                {
                    id: 'source',
                    type: 'image',
                    rect: ['80px', '70px', '970px', '600px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/source.jpg', '0px', '0px']
                },
                {
                    id: 'history',
                    type: 'image',
                    rect: ['80px', '70px', '970px', '600px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/history.gif', '0px', '0px']
                },
                {
                    id: 'outAge',
                    type: 'image',
                    rect: ['158px', '491px', '432px', '160px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/outAge.jpg', '0px', '0px']
                },
                {
                    id: 'outSource',
                    type: 'image',
                    rect: ['158px', '491px', '432px', '160px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/outSource.jpg', '0px', '0px']
                },
                {
                    id: 'historyOn',
                    type: 'group',
                    rect: ['622', '115px', '22', '22', 'auto', 'auto'],
                    c: [
                    {
                        rect: ['0px', '0px', '22px', '22px', 'auto', 'auto'],
                        borderRadius: ['5px 5px', '5px 5px', '5px 5px', '5px 5px'],
                        id: 'check',
                        stroke: [0, 'rgba(130,130,130,1.00)', 'none'],
                        type: 'rect',
                        fill: ['rgba(175,175,175,1.00)']
                    },
                    {
                        id: 'checkHistory',
                        type: 'image',
                        rect: ['1px', '2px', '20px', '20px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/check.png', '0px', '0px']
                    }]
                },
                {
                    id: 'outOn',
                    type: 'group',
                    rect: ['622', '146px', '22', '22', 'auto', 'auto'],
                    c: [
                    {
                        rect: ['0px', '0px', '22px', '22px', 'auto', 'auto'],
                        borderRadius: ['5px 5px', '5px 5px', '5px 5px', '5px 5px'],
                        id: 'checkCopy',
                        stroke: [0, 'rgba(130,130,130,1.00)', 'none'],
                        type: 'rect',
                        fill: ['rgba(175,175,175,1.00)']
                    },
                    {
                        id: 'checkCandidates',
                        type: 'image',
                        rect: ['1px', '2px', '20px', '20px', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/check.png', '0px', '0px']
                    }]
                },
                {
                    rect: ['622px', '115px', '20px', '20px', 'auto', 'auto'],
                    borderRadius: ['5px 5px', '5px 5px', '5px 5px', '5px 5px'],
                    type: 'rect',
                    id: 'btnHistory',
                    stroke: [0, 'rgba(130,130,130,1.00)', 'solid'],
                    cursor: ['pointer'],
                    fill: ['rgba(51,51,51,1)']
                },
                {
                    rect: ['715px', '68px', '97px', '26px', 'auto', 'auto'],
                    id: 'btn_ver1',
                    type: 'image',
                    cursor: ['pointer'],
                    fill: ['rgba(0,0,0,0)', 'images/btn_ver1.gif', '0px', '0px']
                },
                {
                    rect: ['594px', '261px', '97px', '26px', 'auto', 'auto'],
                    id: 'btn_ver1On',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/btn_ver1On.gif', '0px', '0px']
                },
                {
                    rect: ['820px', '68px', '97px', '26px', 'auto', 'auto'],
                    id: 'btn_ver2',
                    type: 'image',
                    cursor: ['pointer'],
                    fill: ['rgba(0,0,0,0)', 'images/btn_ver2.gif', '0px', '0px']
                },
                {
                    rect: ['820px', '68px', '97px', '26px', 'auto', 'auto'],
                    id: 'btn_ver2On',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/btn_ver2On.gif', '0px', '0px']
                },
                {
                    rect: ['622px', '146px', '20px', '20px', 'auto', 'auto'],
                    borderRadius: ['5px 5px', '5px 5px', '5px 5px', '5px 5px'],
                    type: 'rect',
                    id: 'btnCandidates',
                    stroke: [0, 'rgba(136,136,136,1.00)', 'solid'],
                    cursor: ['pointer'],
                    fill: ['rgba(51,51,51,1)']
                },
                {
                    rect: ['630px', '180px', '8px', '8px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'radioBoxSourceOn',
                    stroke: [0, 'rgb(136, 136, 136)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(142,142,142,1.00)']
                },
                {
                    rect: ['630px', '207px', '8px', '8px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    id: 'radioBoxAgeOn',
                    stroke: [0, 'rgb(136, 136, 136)', 'none'],
                    type: 'ellipse',
                    fill: ['rgba(142,142,142,1.00)']
                },
                {
                    rect: ['626px', '176px', '14px', '14px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    type: 'ellipse',
                    id: 'radioBoxSource',
                    stroke: [1, 'rgb(136, 136, 136)', 'solid'],
                    cursor: ['pointer'],
                    fill: ['rgba(51,51,51,0)']
                },
                {
                    rect: ['653', '111px', 'auto', '49px', 'auto', 'auto'],
                    id: 'Show_History',
                    text: 'Show History<br>Show Candidates Lost<br>',
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(68,68,68,1.00)', 'normal', 'none', ''],
                    type: 'text'
                },
                {
                    rect: ['653', '172px', 'auto', 'auto', 'auto', 'auto'],
                    font: ['Arial, Helvetica, sans-serif', 12, 'rgba(68,68,68,1)', '400', 'none', 'normal'],
                    id: 'Text8',
                    text: 'Color by Source<br>Color by Age',
                    align: 'left',
                    type: 'text'
                },
                {
                    rect: ['626px', '203px', '14px', '14px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    type: 'ellipse',
                    id: 'radioBoxAge',
                    stroke: [1, 'rgb(136, 136, 136)', 'solid'],
                    cursor: ['pointer'],
                    fill: ['rgba(51,51,51,0)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_outAge}": [
                ["style", "top", '481px'],
                ["style", "height", '175px'],
                ["style", "opacity", '0'],
                ["style", "left", '181px'],
                ["style", "width", '646px']
            ],
            "${_outSource}": [
                ["style", "top", '481px'],
                ["style", "height", '175px'],
                ["style", "opacity", '0'],
                ["style", "left", '181px'],
                ["style", "width", '646px']
            ],
            "${_radioBoxAgeOn}": [
                ["color", "background-color", 'rgba(142,142,142,1.00)'],
                ["style", "top", '207px'],
                ["style", "border-width", '0px'],
                ["style", "opacity", '0'],
                ["style", "height", '8px'],
                ["style", "border-style", 'none'],
                ["style", "left", '630px'],
                ["style", "width", '8px']
            ],
            "${_outOn}": [
                ["style", "top", '146px'],
                ["style", "opacity", '0']
            ],
            "${_btnCandidates}": [
                ["color", "background-color", 'rgba(51,51,51,0.00)'],
                ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '0'],
                ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '20px'],
                ["style", "top", '146px'],
                ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "cursor", 'pointer'],
                ["style", "height", '20px'],
                ["color", "border-color", 'rgba(136,136,136,1.00)'],
                ["style", "border-width", '1px'],
                ["style", "left", '622px']
            ],
            "${_btn_ver1}": [
                ["style", "top", '68px'],
                ["style", "opacity", '0'],
                ["style", "left", '715px'],
                ["style", "cursor", 'pointer']
            ],
            "${_btn_ver2}": [
                ["style", "top", '68px'],
                ["style", "left", '820px'],
                ["style", "cursor", 'pointer']
            ],
            "${_btn_ver1On}": [
                ["style", "top", '68px'],
                ["style", "opacity", '1'],
                ["style", "left", '715px'],
                ["style", "display", 'block']
            ],
            "${_btn_ver2On}": [
                ["style", "top", '68px'],
                ["style", "opacity", '1'],
                ["style", "left", '820px'],
                ["style", "display", 'none']
            ],
            "${_checkHistory}": [
                ["style", "top", '2px'],
                ["style", "opacity", '0'],
                ["style", "left", '1px']
            ],
            "${_age}": [
                ["style", "top", '57px'],
                ["style", "opacity", '0'],
                ["style", "left", '93px']
            ],
            "${_checkCandidates}": [
                ["style", "top", '2px'],
                ["style", "opacity", '0'],
                ["style", "left", '1px']
            ],
            "${_radioBoxSource}": [
                ["style", "top", '176px'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '14px'],
                ["style", "opacity", '0'],
                ["style", "left", '626px'],
                ["style", "width", '14px']
            ],
            "${_whiteBG}": [
                ["style", "top", '57px'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '659px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '93px'],
                ["style", "width", '969px']
            ],
            "${_checkCopy}": [
                ["color", "background-color", 'rgba(175,175,175,1.00)'],
                ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '0'],
                ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '22px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '0px'],
                ["style", "height", '22px'],
                ["color", "border-color", 'rgba(130,130,130,1.00)'],
                ["style", "border-width", '0px'],
                ["style", "border-style", 'none']
            ],
            "${_history}": [
                ["style", "top", '57px'],
                ["style", "opacity", '0'],
                ["style", "left", '93px']
            ],
            "${_source}": [
                ["style", "top", '57px'],
                ["style", "opacity", '0'],
                ["style", "left", '93px']
            ],
            "${_radioBoxAge}": [
                ["style", "top", '203px'],
                ["style", "cursor", 'pointer'],
                ["style", "height", '14px'],
                ["style", "opacity", '0'],
                ["style", "left", '626px'],
                ["style", "width", '14px']
            ],
            "${_historyOn}": [
                ["style", "top", '115px'],
                ["style", "opacity", '0']
            ],
            "${_Show_History}": [
                ["style", "top", '111px'],
                ["style", "line-height", '31px'],
                ["style", "height", '49px'],
                ["style", "opacity", '0'],
                ["color", "color", 'rgba(68,68,68,1.00)'],
                ["style", "font-size", '12px']
            ],
            "${_check}": [
                ["color", "background-color", 'rgba(175,175,175,1.00)'],
                ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '0'],
                ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '22px'],
                ["style", "top", '0px'],
                ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-style", 'none'],
                ["style", "height", '22px'],
                ["color", "border-color", 'rgba(130,130,130,1.00)'],
                ["style", "border-width", '0px'],
                ["style", "left", '0px']
            ],
            "${_radioBoxSourceOn}": [
                ["color", "background-color", 'rgba(142,142,142,1.00)'],
                ["style", "top", '180px'],
                ["style", "left", '630px'],
                ["style", "opacity", '0'],
                ["style", "height", '8px'],
                ["style", "border-style", 'none'],
                ["style", "border-width", '0px'],
                ["style", "width", '8px']
            ],
            "${_btnHistory}": [
                ["color", "background-color", 'rgba(51,51,51,0.00)'],
                ["style", "border-top-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "border-bottom-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '0'],
                ["style", "border-top-right-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "width", '20px'],
                ["style", "top", '115px'],
                ["style", "border-bottom-left-radius", [5,5], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "cursor", 'pointer'],
                ["style", "height", '20px'],
                ["color", "border-color", 'rgba(130,130,130,1.00)'],
                ["style", "left", '622px'],
                ["style", "border-width", '1px']
            ],
            "${_Text8}": [
                ["style", "line-height", '26px'],
                ["style", "opacity", '0'],
                ["style", "top", '172px']
            ],
            "${symbolSelector}": [
                ["style", "height", '2384px'],
                ["style", "width", '5082px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 88,
            autoPlay: true,
            labels: {
                "start": 0,
                "age": 27,
                "source": 66
            },
            timeline: [
                { id: "eid15044", tween: [ "style", "${_checkCopy}", "opacity", '1', { fromValue: '0'}], position: 27, duration: 17 },
                { id: "eid15049", tween: [ "style", "${_Show_History}", "opacity", '1', { fromValue: '0'}], position: 27, duration: 17 },
                { id: "eid15053", tween: [ "style", "${_btnHistory}", "opacity", '1', { fromValue: '0'}], position: 27, duration: 17 },
                { id: "eid15052", tween: [ "style", "${_Text8}", "opacity", '1', { fromValue: '0'}], position: 27, duration: 17 },
                { id: "eid15043", tween: [ "style", "${_outOn}", "opacity", '1', { fromValue: '0'}], position: 27, duration: 17 },
                { id: "eid15050", tween: [ "style", "${_radioBoxAge}", "opacity", '1', { fromValue: '0'}], position: 27, duration: 17 },
                { id: "eid15048", tween: [ "style", "${_btnCandidates}", "opacity", '1', { fromValue: '0'}], position: 27, duration: 17 },
                { id: "eid11536", tween: [ "style", "${_outAge}", "opacity", '1', { fromValue: '0'}], position: 27, duration: 17 },
                { id: "eid15045", tween: [ "style", "${_checkCandidates}", "opacity", '1', { fromValue: '0'}], position: 27, duration: 17 },
                { id: "eid15040", tween: [ "style", "${_check}", "opacity", '1', { fromValue: '0'}], position: 27, duration: 17 },
                { id: "eid15047", tween: [ "style", "${_historyOn}", "opacity", '1', { fromValue: '0'}], position: 27, duration: 17 },
                { id: "eid11540", tween: [ "style", "${_age}", "opacity", '1', { fromValue: '0'}], position: 27, duration: 17 },
                { id: "eid15041", tween: [ "style", "${_radioBoxSourceOn}", "opacity", '1', { fromValue: '0'}], position: 27, duration: 17 },
                { id: "eid15042", tween: [ "style", "${_checkHistory}", "opacity", '1', { fromValue: '0'}], position: 27, duration: 17 },
                { id: "eid15046", tween: [ "style", "${_radioBoxAgeOn}", "opacity", '1', { fromValue: '0'}], position: 27, duration: 17 },
                { id: "eid15059", tween: [ "style", "${_btn_ver1}", "opacity", '1', { fromValue: '0'}], position: 27, duration: 17 },
                { id: "eid11538", tween: [ "style", "${_history}", "opacity", '1', { fromValue: '0'}], position: 27, duration: 17 },
                { id: "eid16630", tween: [ "style", "${_btn_ver1On}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid16407", tween: [ "style", "${_btn_ver2On}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid15051", tween: [ "style", "${_radioBoxSource}", "opacity", '1', { fromValue: '0'}], position: 27, duration: 17 },
                { id: "eid11541", tween: [ "style", "${_source}", "opacity", '1', { fromValue: '0'}], position: 66, duration: 22 },
                { id: "eid11537", tween: [ "style", "${_outSource}", "opacity", '1', { fromValue: '0'}], position: 66, duration: 22 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-7349787");
