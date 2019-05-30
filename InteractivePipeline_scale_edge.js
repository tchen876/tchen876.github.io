/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-2.0.3.min.js"
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Text11',
                            type: 'text',
                            rect: ['168', '24', 'auto', 'auto', 'auto', 'auto'],
                            text: "Financials Cloud Customer Pipeline: 2015 Q1 EMEA",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [28, "px"], "rgba(102,102,102,1.00)", "400", "none", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'Text3',
                            type: 'text',
                            rect: ['-21', '288', 'auto', 'auto', 'auto', 'auto'],
                            text: "Number of Customers",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [11, "px"], "rgba(102,102,102,1)", "400", "none", "normal", "break-word", "nowrap"],
                            transform: [[],['-90']]
                        },
                        {
                            id: 'Text4',
                            type: 'text',
                            rect: ['-30', '561', 'auto', 'auto', 'auto', 'auto'],
                            text: "Number of Opportunities",
                            align: "left",
                            font: ['Verdana, Geneva, sans-serif', [11, ""], "rgba(102,102,102,1)", "400", "none", "normal", "break-word", "nowrap"],
                            transform: [[],['-90']]
                        },
                        {
                            id: 'hire_target',
                            type: 'group',
                            rect: ['809', '460', '100', '26', 'auto', 'auto'],
                            clip: 'rect(0px 100px 0px 0px)',
                            c: [
                            {
                                id: 'target2',
                                type: 'text',
                                rect: ['1', '10', 'auto', 'auto', 'auto', 'auto'],
                                text: ".....",
                                align: "left",
                                font: ['\'Palatino Linotype\', \'Book Antigua\', Palatino, serif', [12, ""], "rgba(5,143,251,1)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "0px"],
                                transform: [[],['90']]
                            },
                            {
                                id: 'target2Copy',
                                type: 'text',
                                rect: ['84', '10', 'auto', 'auto', 'auto', 'auto'],
                                text: ".....",
                                align: "left",
                                font: ['\'Palatino Linotype\', \'Book Antigua\', Palatino, serif', [12, ""], "rgba(5,143,251,1)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "0px"],
                                transform: [[],['90']]
                            },
                            {
                                id: 'target',
                                type: 'text',
                                rect: ['5', '0', '83', '18', 'auto', 'auto'],
                                text: "............................",
                                align: "left",
                                font: ['Palatino Linotype, Book Antigua, Palatino, serif', [12, "px"], "rgba(5,143,251,1.00)", "400", "none", "normal", "break-word", ""],
                                textStyle: ["0px", "", "", ""]
                            }]
                        },
                        {
                            id: 'Text9',
                            type: 'text',
                            rect: ['52', '136', 'auto', 'auto', 'auto', 'auto'],
                            text: "100<br>90<br>80<br>70<br>60<br>50<br>40<br>30<br>20<br>10<br>0<br>-10<br>-20<br>-30<br>-40",
                            align: "right",
                            font: ['Arial, Helvetica, sans-serif', [11, "px"], "rgba(118,118,118,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "34px", ""]
                        },
                        {
                            id: 'bar1',
                            type: 'rect',
                            rect: ['84', '178', '84', '313', 'auto', 'auto'],
                            fill: ["rgba(124,186,57,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            transform: [[],[],[],['1','0'],['50%','100%']]
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['81', '114', 'auto', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px 0px 22px 0px)',
                            text: "Opportunities",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [18, ""], "rgba(51,51,51,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                            transform: [[],['-45']]
                        },
                        {
                            id: 'gray1',
                            type: 'rect',
                            rect: ['176px', '448', '84px', '43', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(105,123,141,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'dividedLine',
                            type: 'text',
                            rect: ['175', '496', 'auto', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px 0px 22px 0px)',
                            text: ".................",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [18, ""], "rgba(167,167,167,1.00)", "400", "none", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'out1',
                            type: 'text',
                            rect: ['205', '503', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "11",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'outED',
                            type: 'group',
                            rect: ['193', '545', '60', '66', 'auto', 'auto'],
                            clip: 'rect(0px 60px 0px 0px)',
                            c: [
                            {
                                id: '_5education',
                                type: 'text',
                                rect: ['6', '0', 'auto', 'auto', 'auto', 'auto'],
                                text: "5",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(51,51,51,1)", "400", "none", "normal", "break-word", "nowrap"],
                                transform: [[],['45']]
                            },
                            {
                                id: 'education',
                                type: 'text',
                                rect: ['13', '19', 'auto', 'auto', 'auto', 'auto'],
                                text: "Size",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [12, "px"], "rgba(51,51,51,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                                transform: [[],['45']]
                            }]
                        },
                        {
                            id: 'vlineED',
                            type: 'group',
                            rect: ['194', '500', '3', '50', 'auto', 'auto'],
                            clip: 'rect(0px 3px 0px 0px)',
                            c: [
                            {
                                id: 'Ellipse2Copy2',
                                type: 'ellipse',
                                rect: ['0', '47', '3', '3', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(68,68,68,1.00)"],
                                stroke: [0,"rgba(54,54,54,1.00)","none"]
                            },
                            {
                                id: 'Ellipse2Copy3',
                                type: 'ellipse',
                                rect: ['0', '0', '3', '3', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(51,51,51,1.00)"],
                                stroke: [0,"rgba(54,54,54,1.00)","none"]
                            },
                            {
                                id: 'vlineCopy',
                                type: 'rect',
                                rect: ['1', '2', '1', '47', 'auto', 'auto'],
                                fill: ["rgba(85,85,85,1.00)"],
                                stroke: [0,"rgb(54, 54, 54)","solid"]
                            }]
                        },
                        {
                            id: 'vlineEX',
                            type: 'group',
                            rect: ['183', '519', '3', '50', 'auto', 'auto'],
                            clip: 'rect(0px 3px 0px 0px)',
                            c: [
                            {
                                id: 'Ellipse2',
                                type: 'ellipse',
                                rect: ['0', '47', '3', '3', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(68,68,68,1.00)"],
                                stroke: [0,"rgba(54,54,54,1.00)","none"]
                            },
                            {
                                id: 'Ellipse2Copy',
                                type: 'ellipse',
                                rect: ['0', '0', '3', '3', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(51,51,51,1.00)"],
                                stroke: [0,"rgba(54,54,54,1.00)","none"]
                            },
                            {
                                id: 'vline',
                                type: 'rect',
                                rect: ['1', '1', '1', '47', 'auto', 'auto'],
                                fill: ["rgba(68,68,68,1.00)"],
                                stroke: [0,"rgb(54, 54, 54)","solid"]
                            }]
                        },
                        {
                            id: 'outEX',
                            type: 'group',
                            rect: ['177', '568', '68', '68', 'auto', 'auto'],
                            clip: 'rect(0px 67.683471679688px 0px 0px)',
                            c: [
                            {
                                id: '_6ex',
                                type: 'text',
                                rect: ['6', '0', 'auto', 'auto', 'auto', 'auto'],
                                text: "6",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [18, ""], "rgba(51,51,51,1)", "400", "none", "normal", "break-word", "nowrap"],
                                transform: [[],['45']]
                            },
                            {
                                id: 'Experience',
                                type: 'text',
                                rect: ['10', '33', 'auto', 'auto', 'auto', 'auto'],
                                text: "Competitor",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [12, ""], "rgba(51,51,51,1)", "400", "none", "normal", "break-word", "nowrap"],
                                transform: [[],['45']]
                            }]
                        },
                        {
                            id: 'outQulit',
                            type: 'group',
                            rect: ['270', '666', '68', '68', 'auto', 'auto'],
                            clip: 'rect(0px 67.683471679688px 0px 0px)',
                            c: [
                            {
                                id: '_6qual',
                                type: 'text',
                                rect: ['6', '0', 'auto', 'auto', 'auto', 'auto'],
                                text: "12<br>",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [18, ""], "rgba(51,51,51,1)", "400", "none", "normal", "break-word", "nowrap"],
                                transform: [[],['45']]
                            },
                            {
                                id: 'qual_1',
                                type: 'text',
                                rect: ['21', '29', 'auto', 'auto', 'auto', 'auto'],
                                text: "Industry",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [12, ""], "rgba(51,51,51,1)", "400", "none", "normal", "break-word", "nowrap"],
                                transform: [[],['45']]
                            }]
                        },
                        {
                            id: 'outQulitCopy',
                            type: 'group',
                            rect: ['284', '638', '68', '68', 'auto', 'auto'],
                            clip: 'rect(0px 67.683471679688px 0px 0px)',
                            c: [
                            {
                                id: '_6qualCopy',
                                type: 'text',
                                rect: ['6', '0', 'auto', 'auto', 'auto', 'auto'],
                                text: "26<br>",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [18, ""], "rgba(51,51,51,1)", "400", "none", "normal", "break-word", "nowrap"],
                                transform: [[],['45']]
                            },
                            {
                                id: 'qual_1Copy',
                                type: 'text',
                                rect: ['15', '43', '85', 'auto', 'auto', 'auto'],
                                text: " Localizations",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [12, ""], "rgba(51,51,51,1)", "400", "none", "normal", "break-word", ""],
                                transform: [[],['45']]
                            }]
                        },
                        {
                            id: 'bar2',
                            type: 'rect',
                            rect: ['84', '178', '84px', '313', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(124,186,57,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],[],[],[],['50%','100%']]
                        },
                        {
                            id: 'Text5',
                            type: 'text',
                            rect: ['178', '157', 'auto', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px 0px 22px 0px)',
                            text: "Prospects",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [18, ""], "rgba(85,85,85,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                            transform: [[],['-45']]
                        },
                        {
                            id: '_93',
                            type: 'text',
                            rect: ['113', '190', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "93",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(255,255,255,1.00)", "400", "none", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'gray2',
                            type: 'rect',
                            rect: ['267px', '361', '84px', '130', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(105,123,141,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'dividedLineCopy',
                            type: 'text',
                            rect: ['266', '562', 'auto', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px 0px 22px 0px)',
                            text: ".................",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [18, ""], "rgba(167,167,167,1)", "400", "none", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'vline3',
                            type: 'group',
                            rect: ['287', '536', '3', '101', 'auto', 'auto'],
                            clip: 'rect(0px 3px 0px 0px)',
                            c: [
                            {
                                id: 'Rectangle',
                                type: 'rect',
                                rect: ['1', '3', '1px', '95', 'auto', 'auto'],
                                fill: ["rgba(66,66,66,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse',
                                type: 'ellipse',
                                rect: ['0', '98', '3', '3', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(66,66,66,1)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'EllipseCopy',
                                type: 'ellipse',
                                rect: ['0', '0', '3', '3', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(66,66,66,1)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            }]
                        },
                        {
                            id: 'vline3Copy',
                            type: 'group',
                            rect: ['275', '566', '3', '101', 'auto', 'auto'],
                            clip: 'rect(0px 3px 0px 0px)',
                            c: [
                            {
                                id: 'RectangleCopy',
                                type: 'rect',
                                rect: ['1', '32', '1px', '66', 'auto', 'auto'],
                                fill: ["rgba(66,66,66,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'EllipseCopy3',
                                type: 'ellipse',
                                rect: ['0', '96', '3', '3', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(66,66,66,1)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'EllipseCopy2',
                                type: 'ellipse',
                                rect: ['0', '31', '3', '3', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(66,66,66,1)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            }]
                        },
                        {
                            id: 'out38',
                            type: 'text',
                            rect: ['296', '588', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "38",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'bar3',
                            type: 'rect',
                            rect: ['176', '214', '84px', '277', 'auto', 'auto'],
                            opacity: '0.008130081300813',
                            fill: ["rgba(124,186,57,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],[],[],[],['50%','100%']]
                        },
                        {
                            id: 'Text6',
                            type: 'text',
                            rect: ['252', '243', 'auto', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px 0px 22px 0px)',
                            text: "Engineering Qualification",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [18, ""], "rgba(85,85,85,1)", "400", "none", "normal", "break-word", "nowrap"],
                            transform: [[],['-45']]
                        },
                        {
                            id: '_82',
                            type: 'text',
                            rect: ['205', '226', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "82<br>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'gray3',
                            type: 'rect',
                            rect: ['358px', '402', '84px', '89px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(105,123,141,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'skill',
                            type: 'group',
                            rect: ['384', '596', '47', '45', 'auto', 'auto'],
                            clip: 'rect(0px 0px 0px 0px)',
                            c: [
                            {
                                id: '_26skill',
                                type: 'text',
                                rect: ['6', '0', 'auto', 'auto', 'auto', 'auto'],
                                text: "9",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [18, ""], "rgba(51,51,51,1)", "400", "none", "normal", "break-word", "nowrap"],
                                transform: [[],['45']]
                            },
                            {
                                id: 'skill1',
                                type: 'text',
                                rect: ['13', '20', 'auto', 'auto', 'auto', 'auto'],
                                text: "Price",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [12, ""], "rgba(51,51,51,1)", "400", "none", "normal", "break-word", "nowrap"],
                                transform: [[],['45']]
                            }]
                        },
                        {
                            id: 'skillCopy',
                            type: 'group',
                            rect: ['372', '619', '47', '45', 'auto', 'auto'],
                            clip: 'rect(0px 0px 0px 0px)',
                            c: [
                            {
                                id: '_26skillCopy',
                                type: 'text',
                                rect: ['6', '0', 'auto', 'auto', 'auto', 'auto'],
                                text: "5",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [18, ""], "rgba(51,51,51,1)", "400", "none", "normal", "break-word", "nowrap"],
                                transform: [[],['45']]
                            },
                            {
                                id: 'skill1Copy',
                                type: 'text',
                                rect: ['7', '34', 'auto', 'auto', 'auto', 'auto'],
                                text: "Functionality",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [12, ""], "rgba(51,51,51,1)", "400", "none", "normal", "break-word", "nowrap"],
                                transform: [[],['45']]
                            }]
                        },
                        {
                            id: 'skillCopy2',
                            type: 'group',
                            rect: ['360', '652', '47', '45', 'auto', 'auto'],
                            clip: 'rect(0px 0px 0px 0px)',
                            c: [
                            {
                                id: '_26skillCopy2',
                                type: 'text',
                                rect: ['6', '0', 'auto', 'auto', 'auto', 'auto'],
                                text: "11",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [18, ""], "rgba(51,51,51,1)", "400", "none", "normal", "break-word", "nowrap"],
                                transform: [[],['45']]
                            },
                            {
                                id: 'skill1Copy2',
                                type: 'text',
                                rect: ['11', '47', 'auto', 'auto', 'auto', 'auto'],
                                text: "User Experience",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [12, ""], "rgba(51,51,51,1)", "400", "none", "normal", "break-word", "nowrap"],
                                transform: [[],['45']]
                            }]
                        },
                        {
                            id: 'dividedLineCopy2',
                            type: 'text',
                            rect: ['358', '503', 'auto', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px 0px 22px 0px)',
                            text: ".................",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [18, ""], "rgba(167,167,167,1)", "400", "none", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'dividedLineCopy3',
                            type: 'text',
                            rect: ['358', '522', 'auto', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px 0px 22px 0px)',
                            text: ".................",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [18, ""], "rgba(167,167,167,1)", "400", "none", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'vlineSkill1',
                            type: 'group',
                            rect: ['384', '505', '3', '94', 'auto', 'auto'],
                            clip: 'rect(0px 3px 0px 0px)',
                            c: [
                            {
                                id: 'vlineSkill',
                                type: 'rect',
                                rect: ['1', '3', '1px', '88', 'auto', 'auto'],
                                fill: ["rgba(68,68,68,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse5Copy2',
                                type: 'ellipse',
                                rect: ['0', '91', '3', '3', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(68,68,68,1)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse5Copy3',
                                type: 'ellipse',
                                rect: ['0', '0', '3', '3', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(68,68,68,1)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            }]
                        },
                        {
                            id: 'vlineSkill2',
                            type: 'group',
                            rect: ['375', '526', '3', '92', 'auto', 'auto'],
                            clip: 'rect(0px 3px 0px 0px)',
                            c: [
                            {
                                id: 'vlineSkillCopy',
                                type: 'rect',
                                rect: ['1', '2', '1px', '88', 'auto', 'auto'],
                                fill: ["rgba(68,68,68,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse5',
                                type: 'ellipse',
                                rect: ['0', '89', '3', '3', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(68,68,68,1)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse5Copy',
                                type: 'ellipse',
                                rect: ['0', '0', '3', '3', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(68,68,68,1)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            }]
                        },
                        {
                            id: 'vlineSkill3',
                            type: 'group',
                            rect: ['365', '557', '3', '94', 'auto', 'auto'],
                            clip: 'rect(0px 3px 0px 0px)',
                            c: [
                            {
                                id: 'vlineSkillCopy2',
                                type: 'rect',
                                rect: ['1', '4', '1px', '88', 'auto', 'auto'],
                                fill: ["rgba(68,68,68,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4',
                                type: 'ellipse',
                                rect: ['0', '91', '3', '3', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(68,68,68,1)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse4Copy',
                                type: 'ellipse',
                                rect: ['0', '0', '3', '3', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(68,68,68,1)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            }]
                        },
                        {
                            id: 'out25',
                            type: 'text',
                            rect: ['387', '548', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "25",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'bar4',
                            type: 'rect',
                            rect: ['267', '341', '84px', '150', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(124,186,57,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],[],[],[],['50%','100%']]
                        },
                        {
                            id: 'Text7',
                            type: 'text',
                            rect: ['366', '380', 'auto', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px 0px 22px 0px)',
                            text: "Quoted",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [18, ""], "rgba(85,85,85,1)", "400", "none", "normal", "break-word", "nowrap"],
                            transform: [[],['-45']]
                        },
                        {
                            id: 'gray4',
                            type: 'rect',
                            rect: ['449px', '473', '84px', '18', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(105,123,141,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'vlineAssessment',
                            type: 'group',
                            rect: ['464', '499', '2', '26', 'auto', 'auto'],
                            clip: 'rect(0px 2px 0px 0px)',
                            c: [
                            {
                                id: 'vlineassessment',
                                type: 'rect',
                                rect: ['1', '3', '1px', '21', 'auto', 'auto'],
                                fill: ["rgba(68,68,68,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse6',
                                type: 'ellipse',
                                rect: ['0', '23', '3', '3', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(68,68,68,1)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse6Copy',
                                type: 'ellipse',
                                rect: ['0', '0', '3', '3', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(68,68,68,1)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            }]
                        },
                        {
                            id: 'numberAss',
                            type: 'group',
                            rect: ['463', '522', '47', '45', 'auto', 'auto'],
                            clip: 'rect(0px 0px 0px 0px)',
                            c: [
                            {
                                id: '_26skillCopy3',
                                type: 'text',
                                rect: ['6', '0', 'auto', 'auto', 'auto', 'auto'],
                                text: "5",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [18, ""], "rgba(51,51,51,1)", "400", "none", "normal", "break-word", "nowrap"],
                                transform: [[],['45']]
                            },
                            {
                                id: 'outNumAssessment',
                                type: 'text',
                                rect: ['13', '20', 'auto', 'auto', 'auto', 'auto'],
                                clip: 'rect(0px 0px 21px 0px)',
                                text: "Price",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [12, ""], "rgba(51,51,51,1)", "400", "none", "normal", "break-word", "nowrap"],
                                transform: [[],['45']]
                            }]
                        },
                        {
                            id: 'numberAssCopy',
                            type: 'group',
                            rect: ['547', '522', '47', '45', 'auto', 'auto'],
                            clip: 'rect(0px 0px 0px 0px)',
                            c: [
                            {
                                id: '_26skillCopy4',
                                type: 'text',
                                rect: ['6', '0', 'auto', 'auto', 'auto', 'auto'],
                                text: "4",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [18, ""], "rgba(51,51,51,1)", "400", "none", "normal", "break-word", "nowrap"],
                                transform: [[],['45']]
                            },
                            {
                                id: 'outNumAssessmentCopy',
                                type: 'text',
                                rect: ['1', '51', 'auto', 'auto', 'auto', 'auto'],
                                text: "German Data Center",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [12, ""], "rgba(51,51,51,1)", "400", "none", "normal", "break-word", "nowrap"],
                                transform: [[],['45']]
                            }]
                        },
                        {
                            id: 'out5',
                            type: 'text',
                            rect: ['491', '493', '7', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "5",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'bar5',
                            type: 'rect',
                            rect: ['358', '428', '84px', '63', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(124,186,57,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],[],[],[],['50%','100%']]
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['387', '437', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "19",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(255,255,255,1.00)", "400", "none", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: '_44',
                            type: 'text',
                            rect: ['296', '353', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "44",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(255,255,255,1.00)", "400", "none", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'Text8',
                            type: 'text',
                            rect: ['452', '390', 'auto', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px 0px 22px 0px)',
                            text: "Contracted",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [18, ""], "rgba(85,85,85,1)", "400", "none", "normal", "break-word", "nowrap"],
                            transform: [[],['-45']]
                        },
                        {
                            id: 'gray5',
                            type: 'rect',
                            rect: ['540px', '475', '84px', '16px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(105,123,141,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'vlineAssessmentCopy',
                            type: 'group',
                            rect: ['549', '499', '2', '26', 'auto', 'auto'],
                            clip: 'rect(0px 3px 0px 0px)',
                            c: [
                            {
                                id: 'vlineassessmentCopy',
                                type: 'rect',
                                rect: ['1', '3', '1px', '21', 'auto', 'auto'],
                                fill: ["rgba(68,68,68,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse6Copy3',
                                type: 'ellipse',
                                rect: ['0', '23', '3', '3', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(68,68,68,1)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse6Copy2',
                                type: 'ellipse',
                                rect: ['0', '0', '3', '3', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(68,68,68,1)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            }]
                        },
                        {
                            id: 'out4',
                            type: 'text',
                            rect: ['578', '492', '7', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "4",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [14, ""], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'bar6',
                            type: 'rect',
                            rect: ['449', '446', '84px', '45', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(124,186,57,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],[],[],[],['50%','100%']]
                        },
                        {
                            id: '_14',
                            type: 'text',
                            rect: ['478', '453', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "14",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'Text10',
                            type: 'text',
                            rect: ['544', '398', 'auto', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px 0px 22px 0px)',
                            text: "Provisioned",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [18, ""], "rgba(85,85,85,1)", "400", "none", "normal", "break-word", "nowrap"],
                            transform: [[],['-45']]
                        },
                        {
                            id: 'gray6',
                            type: 'rect',
                            rect: ['631px', '475', '84px', '16px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(105,123,141,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'offerNumber',
                            type: 'group',
                            rect: ['638', '522', '64', '63', 'auto', 'auto'],
                            clip: 'rect(0px 0px 0px 0px)',
                            c: [
                            {
                                id: '_26skillCopy5',
                                type: 'text',
                                rect: ['6', '0', 'auto', 'auto', 'auto', 'auto'],
                                text: "4",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [18, ""], "rgba(51,51,51,1)", "400", "none", "normal", "break-word", "nowrap"],
                                transform: [[],['45']]
                            },
                            {
                                id: 'outNumAssessmentCopy2',
                                type: 'text',
                                rect: ['6', '37', 'auto', 'auto', 'auto', 'auto'],
                                text: "Partner Contract",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [12, ""], "rgba(51,51,51,1)", "400", "none", "normal", "break-word", "nowrap"],
                                transform: [[],['45']]
                            }]
                        },
                        {
                            id: 'vlineAssessmentCopy2',
                            type: 'group',
                            rect: ['641', '499', '2', '26', 'auto', 'auto'],
                            clip: 'rect(0px 3px 0px 0px)',
                            c: [
                            {
                                id: 'vlineassessmentCopy2',
                                type: 'rect',
                                rect: ['1', '3', '1px', '21', 'auto', 'auto'],
                                fill: ["rgba(68,68,68,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse6Copy5',
                                type: 'ellipse',
                                rect: ['0', '23', '3', '3', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(68,68,68,1)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse6Copy4',
                                type: 'ellipse',
                                rect: ['0', '0', '3', '3', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(68,68,68,1)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            }]
                        },
                        {
                            id: 'out6',
                            type: 'text',
                            rect: ['670', '492', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "4",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [14, ""], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'bar7',
                            type: 'rect',
                            rect: ['540', '459', '84px', '32', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(124,186,57,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],[],[],[],['50%','100%']]
                        },
                        {
                            id: '_10',
                            type: 'text',
                            rect: ['571', '464', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "10",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [20, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'Text12',
                            type: 'text',
                            rect: ['632', '409', 'auto', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px 0px 22px 0px)',
                            text: "Implementing",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [18, ""], "rgba(85,85,85,1)", "400", "none", "normal", "break-word", "nowrap"],
                            transform: [[],['-45']]
                        },
                        {
                            id: 'gray7',
                            type: 'rect',
                            rect: ['722px', '488', '84px', '3px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(105,123,141,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'offerNumberCopy',
                            type: 'group',
                            rect: ['730', '506', '64', '63', 'auto', 'auto'],
                            clip: 'rect(0px 0px 0px 0px)',
                            c: [
                            {
                                id: '_26skillCopy6',
                                type: 'text',
                                rect: ['6', '0', 'auto', 'auto', 'auto', 'auto'],
                                text: "1",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [18, ""], "rgba(51,51,51,1)", "400", "none", "normal", "break-word", "nowrap"],
                                transform: [[],['45']]
                            },
                            {
                                id: 'outNumAssessmentCopy3',
                                type: 'text',
                                rect: ['3', '45', 'auto', 'auto', 'auto', 'auto'],
                                text: "Integration Testing",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [12, ""], "rgba(51,51,51,1)", "400", "none", "normal", "break-word", "nowrap"],
                                transform: [[],['45']]
                            }]
                        },
                        {
                            id: 'vlineAssessmentCopy3',
                            type: 'group',
                            rect: ['731', '492', '2', '26', 'auto', 'auto'],
                            clip: 'rect(0px 3px 0px 0px)',
                            c: [
                            {
                                id: 'vlineassessmentCopy3',
                                type: 'rect',
                                rect: ['1', '3', '1px', '12', 'auto', 'auto'],
                                fill: ["rgba(68,68,68,1.00)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse6Copy7',
                                type: 'ellipse',
                                rect: ['0', '15', '3', '3', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(68,68,68,1)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Ellipse6Copy6',
                                type: 'ellipse',
                                rect: ['0', '0', '3', '3', 'auto', 'auto'],
                                borderRadius: ["50%", "50%", "50%", "50%"],
                                fill: ["rgba(68,68,68,1)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            }]
                        },
                        {
                            id: 'bar8',
                            type: 'rect',
                            rect: ['631', '472', '84px', '19', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(124,186,57,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],[],[],[],['50%','100%']]
                        },
                        {
                            id: 'bar9',
                            type: 'rect',
                            rect: ['722', '475', '84px', '16', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(124,186,57,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],[],[],[],['50%','100%']]
                        },
                        {
                            id: 'number_offer',
                            type: 'text',
                            rect: ['670', '472', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "6",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'Text14',
                            type: 'text',
                            rect: ['810', '410', 'auto', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px 0px 22px 0px)',
                            text: "Referencable ",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [18, ""], "rgba(85,85,85,1)", "400", "none", "normal", "break-word", "nowrap"],
                            transform: [[],['-45']]
                        },
                        {
                            id: 'number_finalChecks',
                            type: 'text',
                            rect: ['760', '475', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "5",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(255,255,255,1.00)", "400", "none", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'number_hired',
                            type: 'text',
                            rect: ['852', '477', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "4",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [12, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "nowrap"]
                        },
                        {
                            id: 'Text13',
                            type: 'text',
                            rect: ['737', '438', 'auto', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px 0px 22px 0px)',
                            text: "Live",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [18, ""], "rgba(85,85,85,1)", "400", "none", "normal", "break-word", "nowrap"],
                            transform: [[],['-45']]
                        },
                        {
                            id: 'hwhitreline',
                            type: 'rect',
                            rect: ['84', '491', '892', '1px', 'auto', 'auto'],
                            fill: ["rgba(68,68,68,1)",[270,[['rgba(255,255,255,1.00)',0],['rgba(255,255,255,1.00)',100]]]],
                            stroke: [0,"rgb(54, 54, 54)","none"]
                        },
                        {
                            id: 'details',
                            symbolName: 'details',
                            type: 'rect',
                            rect: ['auto', 'auto', '5082', '2384', '-4018', '-1667'],
                            opacity: '0'
                        },
                        {
                            id: 'targeted',
                            type: 'group',
                            rect: ['902', '458', '124', '67', 'auto', 'auto'],
                            clip: 'rect(0px 0px 67px 0px)',
                            c: [
                            {
                                id: 'targetBox',
                                type: 'image',
                                rect: ['0', '0', '124px', '33px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"target.png",'0px','0px']
                            },
                            {
                                id: 'trgeted',
                                type: 'text',
                                rect: ['39', '6', 'auto', 'auto', 'auto', 'auto'],
                                text: " Targeted",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(51,153,204,1.00)", "400", "none", "normal", "break-word", "nowrap"]
                            },
                            {
                                id: '_6',
                                type: 'text',
                                rect: ['17', '0', 'auto', 'auto', 'auto', 'auto'],
                                text: "6",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [30, "px"], "rgba(51,153,204,1)", "400", "none", "normal", "break-word", "nowrap"]
                            },
                            {
                                id: '_4',
                                type: 'text',
                                rect: ['17', '31', 'auto', 'auto', 'auto', 'auto'],
                                text: "4",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [30, ""], "rgba(124,186,57,1.00)", "400", "none", "normal", "break-word", "nowrap"]
                            },
                            {
                                id: 'hired',
                                type: 'text',
                                rect: ['41', '40', 'auto', 'auto', 'auto', 'auto'],
                                text: "References",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [18, "px"], "rgba(124,186,57,1)", "400", "none", "normal", "break-word", "nowrap"]
                            }]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1050', '745', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 10125,
                    autoPlay: true,
                    labels: {
                        "start": 0
                    },
                    data: [
                        [
                            "eid17648",
                            "clip",
                            3240,
                            260,
                            "linear",
                            "${outQulitCopy}",
                            [0,67.683471679688,0,0],
                            [0,67.6834716796875,67.68367767333984,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid20580",
                            "clip",
                            3500,
                            6625,
                            "linear",
                            "${outQulitCopy}",
                            [0,67.6834716796875,67.68367767333984,0],
                            [0,83,77,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid21398",
                            "clip",
                            3080,
                            345,
                            "linear",
                            "${Text6}",
                            [0,0,22,0],
                            [0,200,22,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid21525",
                            "clip",
                            5386,
                            367,
                            "linear",
                            "${Text8}",
                            [0,0,22,0],
                            [0,88,22,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid3642",
                            "opacity",
                            6425,
                            328,
                            "linear",
                            "${_10}",
                            '0',
                            '1'
                        ],
                        [
                            "eid422",
                            "left",
                            3080,
                            665,
                            "linear",
                            "${bar4}",
                            '267px',
                            '358px'
                        ],
                        [
                            "eid3697",
                            "opacity",
                            3080,
                            345,
                            "linear",
                            "${out38}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1289",
                            "top",
                            4973,
                            452,
                            "linear",
                            "${gray4}",
                            '473px',
                            '492px'
                        ],
                        [
                            "eid21591",
                            "clip",
                            7425,
                            400,
                            "linear",
                            "${Text12}",
                            [0,0,22,0],
                            [0,113,22,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid719",
                            "left",
                            6425,
                            580,
                            "linear",
                            "${bar7}",
                            '540px',
                            '631px'
                        ],
                        [
                            "eid866",
                            "top",
                            8925,
                            400,
                            "linear",
                            "${bar9}",
                            '475px',
                            '478px'
                        ],
                        [
                            "eid582",
                            "opacity",
                            5425,
                            602,
                            "linear",
                            "${bar6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1206",
                            "opacity",
                            3745,
                            49,
                            "linear",
                            "${gray3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid17631",
                            "clip",
                            3539,
                            330,
                            "linear",
                            "${outQulit}",
                            [0,67.683471679688,0,0],
                            [0,67.6834716796875,67.68367767333984,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid580",
                            "left",
                            5425,
                            602,
                            "linear",
                            "${bar6}",
                            '449px',
                            '540px'
                        ],
                        [
                            "eid772",
                            "height",
                            7970,
                            455,
                            "linear",
                            "${bar8}",
                            '19px',
                            '16px'
                        ],
                        [
                            "eid322",
                            "left",
                            1655,
                            695,
                            "linear",
                            "${bar3}",
                            '176px',
                            '267px'
                        ],
                        [
                            "eid432",
                            "height",
                            3745,
                            596,
                            "linear",
                            "${bar4}",
                            '150px',
                            '63px'
                        ],
                        [
                            "eid512",
                            "top",
                            4973,
                            452,
                            "linear",
                            "${bar5}",
                            '428px',
                            '446px'
                        ],
                        [
                            "eid722",
                            "top",
                            7005,
                            420,
                            "linear",
                            "${bar7}",
                            '459px',
                            '472px'
                        ],
                        [
                            "eid864",
                            "opacity",
                            8425,
                            500,
                            "linear",
                            "${bar9}",
                            '0',
                            '1'
                        ],
                        [
                            "eid111",
                            "opacity",
                            685,
                            610,
                            "linear",
                            "${bar2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1398",
                            "opacity",
                            6027,
                            61,
                            "linear",
                            "${gray5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid22053",
                            "clip",
                            5699,
                            272,
                            "linear",
                            "${outNumAssessment}",
                            [0,0,21,0],
                            [0,54,21,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid21588",
                            "clip",
                            6425,
                            401,
                            "linear",
                            "${Text10}",
                            [0,0,22,0],
                            [0,94,22,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid909",
                            "top",
                            1295,
                            360,
                            "linear",
                            "${gray1}",
                            '448px',
                            '492px'
                        ],
                        [
                            "eid19685",
                            "clip",
                            4837,
                            181,
                            "linear",
                            "${skillCopy}",
                            [0,0,0,0],
                            [0,80,74,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid992",
                            "opacity",
                            1295,
                            40,
                            "linear",
                            "${gray1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid20084",
                            "clip",
                            8382,
                            118,
                            "linear",
                            "${vlineAssessmentCopy3}",
                            [0,3,0,0],
                            [0,3,20,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid19679",
                            "clip",
                            4552,
                            198,
                            "linear",
                            "${skill}",
                            [0,0,0,0],
                            [0,46.78384780883789,44.784217834472656,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid19688",
                            "clip",
                            4917,
                            184,
                            "linear",
                            "${vlineSkill3}",
                            [0,3,0,0],
                            [0,3,93.99996185302734,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid19641",
                            "clip",
                            4330,
                            160,
                            "linear",
                            "${dividedLineCopy2}",
                            [0,0,22,0],
                            [0,85,22,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid19676",
                            "clip",
                            4341,
                            211,
                            "linear",
                            "${vlineSkill1}",
                            [0,3,0,0],
                            [0,3,93.99996185302734,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid3268",
                            "clip",
                            9150,
                            350,
                            "linear",
                            "${targeted}",
                            [0,0,67,0],
                            [0,137,67,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid17899",
                            "clip",
                            3080,
                            160,
                            "linear",
                            "${dividedLineCopy}",
                            [0,0,22,0],
                            [0,85,22,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid3411",
                            "clip",
                            9150,
                            350,
                            "linear",
                            "${hire_target}",
                            [0,100,0,0],
                            [0,100,26,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid419",
                            "-webkit-transform-origin",
                            3080,
                            0,
                            "linear",
                            "${bar4}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid22359",
                            "-moz-transform-origin",
                            3080,
                            0,
                            "linear",
                            "${bar4}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid22360",
                            "-ms-transform-origin",
                            3080,
                            0,
                            "linear",
                            "${bar4}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid22361",
                            "msTransformOrigin",
                            3080,
                            0,
                            "linear",
                            "${bar4}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid22362",
                            "-o-transform-origin",
                            3080,
                            0,
                            "linear",
                            "${bar4}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid22363",
                            "transform-origin",
                            3080,
                            0,
                            "linear",
                            "${bar4}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid19682",
                            "clip",
                            4606,
                            231,
                            "linear",
                            "${vlineSkill2}",
                            [0,3,0,0],
                            [0,3,91.9998550415039,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1292",
                            "opacity",
                            4973,
                            45,
                            "linear",
                            "${gray4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid771",
                            "opacity",
                            7425,
                            545,
                            "linear",
                            "${bar8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2562",
                            "opacity",
                            545,
                            375,
                            "linear",
                            "${_93}",
                            '0',
                            '1'
                        ],
                        [
                            "eid865",
                            "height",
                            8925,
                            400,
                            "linear",
                            "${bar9}",
                            '16px',
                            '13px'
                        ],
                        [
                            "eid3706",
                            "opacity",
                            6425,
                            328,
                            "linear",
                            "${out4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1404",
                            "opacity",
                            7005,
                            48,
                            "linear",
                            "${gray6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2885",
                            "opacity",
                            1655,
                            345,
                            "linear",
                            "${_82}",
                            '0',
                            '1'
                        ],
                        [
                            "eid5384",
                            "clip",
                            2170,
                            330,
                            "linear",
                            "${outEX}",
                            [0,67.683471679688,0,0],
                            [0,67.6834716796875,67.68367767333984,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid20009",
                            "clip",
                            6425,
                            146,
                            "linear",
                            "${vlineAssessmentCopy}",
                            [0,3,0,0],
                            [0,3,26.00005531311,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid5378",
                            "clip",
                            1900,
                            270,
                            "linear",
                            "${vlineEX}",
                            [0,3,0,0],
                            [0,3,50.00017547607422,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid21274",
                            "clip",
                            1655,
                            345,
                            "linear",
                            "${Text5}",
                            [0,0,22,0],
                            [0,80,22,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid3553",
                            "opacity",
                            3080,
                            403,
                            "linear",
                            "${_44}",
                            '0',
                            '1'
                        ],
                        [
                            "eid329",
                            "top",
                            2350,
                            730,
                            "linear",
                            "${bar3}",
                            '214px',
                            '341px'
                        ],
                        [
                            "eid1080",
                            "opacity",
                            2350,
                            45,
                            "linear",
                            "${gray2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid17672",
                            "clip",
                            3365,
                            174,
                            "linear",
                            "${vline3Copy}",
                            [0,3,0,0],
                            [0,3,101,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid5447",
                            "clip",
                            1655,
                            305,
                            "linear",
                            "${dividedLine}",
                            [0,0,22,0],
                            [0,85,22,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid20011",
                            "clip",
                            6571,
                            179,
                            "linear",
                            "${numberAssCopy}",
                            [0,0,0,0],
                            [0,109,112,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid863",
                            "left",
                            8425,
                            500,
                            "linear",
                            "${bar9}",
                            '722px',
                            '813px'
                        ],
                        [
                            "eid19941",
                            "clip",
                            5588,
                            179,
                            "linear",
                            "${numberAss}",
                            [0,0,0,0],
                            [0,46.783851623535156,44.7840461730957,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid21654",
                            "clip",
                            8425,
                            205,
                            "linear",
                            "${Text13}",
                            [0,0,22,0],
                            [0,44,22,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid19948",
                            "clip",
                            5442,
                            146,
                            "linear",
                            "${vlineAssessment}",
                            [0,2,0,0],
                            [0,2,26.00005531311035,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid340",
                            "opacity",
                            1655,
                            695,
                            "linear",
                            "${bar3}",
                            '0.008130081300813',
                            '1'
                        ],
                        [
                            "eid3700",
                            "opacity",
                            4341,
                            334,
                            "linear",
                            "${out25}",
                            '0',
                            '1'
                        ],
                        [
                            "eid856",
                            "-webkit-transform-origin",
                            8425,
                            0,
                            "linear",
                            "${bar9}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid22364",
                            "-moz-transform-origin",
                            8425,
                            0,
                            "linear",
                            "${bar9}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid22365",
                            "-ms-transform-origin",
                            8425,
                            0,
                            "linear",
                            "${bar9}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid22366",
                            "msTransformOrigin",
                            8425,
                            0,
                            "linear",
                            "${bar9}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid22367",
                            "-o-transform-origin",
                            8425,
                            0,
                            "linear",
                            "${bar9}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid22368",
                            "transform-origin",
                            8425,
                            0,
                            "linear",
                            "${bar9}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid1407",
                            "top",
                            7970,
                            455,
                            "linear",
                            "${gray7}",
                            '488px',
                            '492px'
                        ],
                        [
                            "eid13181",
                            "opacity",
                            10056,
                            69,
                            "linear",
                            "${details}",
                            '0',
                            '1'
                        ],
                        [
                            "eid433",
                            "top",
                            3745,
                            596,
                            "linear",
                            "${bar4}",
                            '341px',
                            '428px'
                        ],
                        [
                            "eid511",
                            "height",
                            4973,
                            452,
                            "linear",
                            "${bar5}",
                            '63px',
                            '45px'
                        ],
                        [
                            "eid3616",
                            "opacity",
                            4341,
                            334,
                            "linear",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid20089",
                            "clip",
                            8500,
                            161,
                            "linear",
                            "${offerNumberCopy}",
                            [0,0,0,0],
                            [0,107,98,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid19691",
                            "clip",
                            5101,
                            158,
                            "linear",
                            "${skillCopy2}",
                            [0,0,0,0],
                            [0,98,96,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid508",
                            "-webkit-transform-origin",
                            4341,
                            0,
                            "linear",
                            "${bar5}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid22369",
                            "-moz-transform-origin",
                            4341,
                            0,
                            "linear",
                            "${bar5}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid22370",
                            "-ms-transform-origin",
                            4341,
                            0,
                            "linear",
                            "${bar5}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid22371",
                            "msTransformOrigin",
                            4341,
                            0,
                            "linear",
                            "${bar5}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid22372",
                            "-o-transform-origin",
                            4341,
                            0,
                            "linear",
                            "${bar5}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid22373",
                            "transform-origin",
                            4341,
                            0,
                            "linear",
                            "${bar5}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid21128",
                            "clip",
                            685,
                            315,
                            "linear",
                            "${Text}",
                            [0,0,22,0],
                            [0,107,22,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid720",
                            "opacity",
                            6425,
                            580,
                            "linear",
                            "${bar7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid17669",
                            "clip",
                            3080,
                            160,
                            "linear",
                            "${vline3}",
                            [0,3,0,0],
                            [0,3,100.99992370605469,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1205",
                            "top",
                            3745,
                            596,
                            "linear",
                            "${gray3}",
                            '402px',
                            '492px'
                        ],
                        [
                            "eid5381",
                            "clip",
                            1900,
                            270,
                            "linear",
                            "${outED}",
                            [0,60,0,0],
                            [0,60,66,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid721",
                            "height",
                            7005,
                            420,
                            "linear",
                            "${bar7}",
                            '32px',
                            '19px'
                        ],
                        [
                            "eid3651",
                            "opacity",
                            9675,
                            250,
                            "linear",
                            "${number_hired}",
                            '0',
                            '1'
                        ],
                        [
                            "eid434",
                            "opacity",
                            3080,
                            665,
                            "linear",
                            "${bar4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid74",
                            "left",
                            685,
                            610,
                            "linear",
                            "${bar2}",
                            '84px',
                            '176px'
                        ],
                        [
                            "eid770",
                            "left",
                            7425,
                            545,
                            "linear",
                            "${bar8}",
                            '631px',
                            '722px'
                        ],
                        [
                            "eid328",
                            "height",
                            2350,
                            730,
                            "linear",
                            "${bar3}",
                            '277px',
                            '150px'
                        ],
                        [
                            "eid83",
                            "height",
                            1295,
                            360,
                            "linear",
                            "${bar2}",
                            '313px',
                            '277px'
                        ],
                        [
                            "eid773",
                            "top",
                            7970,
                            455,
                            "linear",
                            "${bar8}",
                            '472px',
                            '475px'
                        ],
                        [
                            "eid590",
                            "top",
                            6027,
                            398,
                            "linear",
                            "${bar6}",
                            '446px',
                            '459px'
                        ],
                        [
                            "eid1395",
                            "top",
                            6027,
                            398,
                            "linear",
                            "${gray5}",
                            '475px',
                            '492px'
                        ],
                        [
                            "eid20083",
                            "clip",
                            7571,
                            226,
                            "linear",
                            "${offerNumber}",
                            [0,0,0,0],
                            [0,93,90,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1410",
                            "opacity",
                            7970,
                            48,
                            "linear",
                            "${gray7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid21657",
                            "clip",
                            9325,
                            350,
                            "linear",
                            "${Text14}",
                            [0,0,22,0],
                            [0,112,22,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1401",
                            "top",
                            7005,
                            420,
                            "linear",
                            "${gray6}",
                            '475px',
                            '492px'
                        ],
                        [
                            "eid510",
                            "opacity",
                            4341,
                            632,
                            "linear",
                            "${bar5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3648",
                            "opacity",
                            8425,
                            317,
                            "linear",
                            "${number_finalChecks}",
                            '0',
                            '1'
                        ],
                        [
                            "eid509",
                            "left",
                            4341,
                            632,
                            "linear",
                            "${bar5}",
                            '358px',
                            '449px'
                        ],
                        [
                            "eid3703",
                            "opacity",
                            5425,
                            290,
                            "linear",
                            "${out5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid6",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${bar1}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid22374",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${bar1}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid22375",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${bar1}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid22376",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${bar1}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid22377",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${bar1}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid22378",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${bar1}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3645",
                            "opacity",
                            7425,
                            285,
                            "linear",
                            "${number_offer}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3709",
                            "opacity",
                            7425,
                            400,
                            "linear",
                            "${out6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid21461",
                            "clip",
                            4341,
                            295,
                            "linear",
                            "${Text7}",
                            [0,0,22,0],
                            [0,59,22,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid20078",
                            "clip",
                            7425,
                            146,
                            "linear",
                            "${vlineAssessmentCopy2}",
                            [0,3,0,0],
                            [0,3,26.00005531311,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid763",
                            "-webkit-transform-origin",
                            7425,
                            0,
                            "linear",
                            "${bar8}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid22379",
                            "-moz-transform-origin",
                            7425,
                            0,
                            "linear",
                            "${bar8}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid22380",
                            "-ms-transform-origin",
                            7425,
                            0,
                            "linear",
                            "${bar8}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid22381",
                            "msTransformOrigin",
                            7425,
                            0,
                            "linear",
                            "${bar8}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid22382",
                            "-o-transform-origin",
                            7425,
                            0,
                            "linear",
                            "${bar8}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid22383",
                            "transform-origin",
                            7425,
                            0,
                            "linear",
                            "${bar8}",
                            [50,100],
                            [50,100],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid19650",
                            "clip",
                            4330,
                            160,
                            "linear",
                            "${dividedLineCopy3}",
                            [0,0,22,0],
                            [0,85,22,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid3674",
                            "opacity",
                            1655,
                            305,
                            "linear",
                            "${out1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid84",
                            "top",
                            1295,
                            360,
                            "linear",
                            "${bar2}",
                            '178px',
                            '214px'
                        ],
                        [
                            "eid5155",
                            "clip",
                            1655,
                            245,
                            "linear",
                            "${vlineED}",
                            [0,3,0,0],
                            [0,3,49.99996566772461,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1079",
                            "top",
                            2350,
                            730,
                            "linear",
                            "${gray2}",
                            '361px',
                            '492px'
                        ],
                        [
                            "eid589",
                            "height",
                            6027,
                            398,
                            "linear",
                            "${bar6}",
                            '45px',
                            '32px'
                        ],
                        [
                            "eid10",
                            "scaleY",
                            0,
                            685,
                            "linear",
                            "${bar1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3619",
                            "opacity",
                            5425,
                            328,
                            "linear",
                            "${_14}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "details": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            overflow: 'hidden',
                            id: 'whiteBG',
                            stroke: [0, 'rgb(136, 136, 136)', 'none'],
                            rect: [93, 57, 969, 659, 'auto', 'auto'],
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: [93, 57, '970px', '600px', 'auto', 'auto'],
                            id: 'age',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/age.jpg', '0px', '0px']
                        },
                        {
                            rect: [93, 57, '970px', '600px', 'auto', 'auto'],
                            id: 'source',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/source.jpg', '0px', '0px']
                        },
                        {
                            rect: [93, 57, '970px', '600px', 'auto', 'auto'],
                            id: 'history',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/history.gif', '0px', '0px']
                        },
                        {
                            rect: [181, 481, 646, 175, 'auto', 'auto'],
                            id: 'outAge',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/outAge.jpg', '0px', '0px']
                        },
                        {
                            rect: [181, 481, 646, 175, 'auto', 'auto'],
                            id: 'outSource',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/outSource.jpg', '0px', '0px']
                        },
                        {
                            rect: ['622', 115, '22', '22', 'auto', 'auto'],
                            id: 'historyOn',
                            opacity: '0',
                            type: 'group',
                            c: [
                            {
                                rect: [0, 0, 22, 22, 'auto', 'auto'],
                                borderRadius: ['5px 5px', '5px 5px', '5px 5px', '5px 5px'],
                                opacity: '0',
                                id: 'check',
                                stroke: ['0px', 'rgba(130,130,130,1.00)', 'none'],
                                type: 'rect',
                                fill: ['rgba(175,175,175,1.00)']
                            },
                            {
                                rect: [1, 2, '20px', '20px', 'auto', 'auto'],
                                id: 'checkHistory',
                                opacity: '0',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/check.png', '0px', '0px']
                            }]
                        },
                        {
                            rect: ['622', 146, '22', '22', 'auto', 'auto'],
                            id: 'outOn',
                            opacity: '0',
                            type: 'group',
                            c: [
                            {
                                rect: [0, 0, 22, 22, 'auto', 'auto'],
                                borderRadius: ['5px 5px', '5px 5px', '5px 5px', '5px 5px'],
                                opacity: '0',
                                id: 'checkCopy',
                                stroke: ['0px', 'rgba(130,130,130,1.00)', 'none'],
                                type: 'rect',
                                fill: ['rgba(175,175,175,1.00)']
                            },
                            {
                                rect: [1, 2, '20px', '20px', 'auto', 'auto'],
                                id: 'checkCandidates',
                                opacity: '0',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/check.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'rect',
                            borderRadius: ['5px 5px', '5px 5px', '5px 5px', '5px 5px'],
                            id: 'btnHistory',
                            stroke: ['1px', 'rgba(130,130,130,1.00)', 'solid'],
                            cursor: 'pointer',
                            rect: [622, 115, 20, 20, 'auto', 'auto'],
                            opacity: '0',
                            fill: ['rgba(51,51,51,0.00)']
                        },
                        {
                            type: 'image',
                            rect: [715, 68, '97px', '26px', 'auto', 'auto'],
                            id: 'btn_ver1',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/btn_ver1.gif', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: [715, 68, '97px', '26px', 'auto', 'auto'],
                            display: 'block',
                            opacity: '1',
                            id: 'btn_ver1On',
                            fill: ['rgba(0,0,0,0)', 'images/btn_ver1On.gif', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'btn_ver2',
                            rect: [820, 68, '97px', '26px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/btn_ver2.gif', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: [820, 68, '97px', '26px', 'auto', 'auto'],
                            display: 'none',
                            opacity: '1',
                            id: 'btn_ver2On',
                            fill: ['rgba(0,0,0,0)', 'images/btn_ver2On.gif', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['5px 5px', '5px 5px', '5px 5px', '5px 5px'],
                            id: 'btnCandidates',
                            stroke: ['1px', 'rgba(136,136,136,1.00)', 'solid'],
                            cursor: 'pointer',
                            rect: [622, 146, 20, 20, 'auto', 'auto'],
                            opacity: '0',
                            fill: ['rgba(51,51,51,0.00)']
                        },
                        {
                            rect: [630, 180, 8, 8, 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            opacity: '0',
                            id: 'radioBoxSourceOn',
                            stroke: ['0px', 'rgb(136, 136, 136)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(142,142,142,1.00)']
                        },
                        {
                            rect: [630, 207, 8, 8, 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            opacity: '0',
                            id: 'radioBoxAgeOn',
                            stroke: ['0px', 'rgb(136, 136, 136)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(142,142,142,1.00)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'radioBoxSource',
                            stroke: [1, 'rgb(136, 136, 136)', 'solid'],
                            cursor: 'pointer',
                            rect: [626, 176, 14, 14, 'auto', 'auto'],
                            opacity: '0',
                            fill: ['rgba(51,51,51,0)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(68,68,68,1.00)', 'normal', 'none', '', '', ''],
                            opacity: '0',
                            textStyle: ['', '', '31px', ''],
                            id: 'Show_History',
                            text: 'Show History<br>Show Candidates Lost<br>',
                            type: 'text',
                            rect: ['653', 111, 'auto', 49, 'auto', 'auto']
                        },
                        {
                            type: 'text',
                            align: 'left',
                            text: 'Color by Source<br>Color by Age',
                            rect: ['653', 172, 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            font: ['Arial, Helvetica, sans-serif', [12, ''], 'rgba(68,68,68,1)', '400', 'none', 'normal', '', 'nowrap'],
                            textStyle: ['', '', '26px', ''],
                            id: 'Text8'
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'radioBoxAge',
                            stroke: [1, 'rgb(136, 136, 136)', 'solid'],
                            cursor: 'pointer',
                            rect: [626, 203, 14, 14, 'auto', 'auto'],
                            opacity: '0',
                            fill: ['rgba(51,51,51,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 5082, 2384]
                        }
                    }
                },
                timeline: {
                    duration: 88,
                    autoPlay: true,
                    labels: {
                        "start": 0,
                        "age": 27,
                        "source": 66
                    },
                    data: [
                        [
                            "eid15052",
                            "opacity",
                            27,
                            17,
                            "linear",
                            "${Text8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid16630",
                            "display",
                            0,
                            0,
                            "linear",
                            "${btn_ver1On}",
                            'block',
                            'block'
                        ],
                        [
                            "eid11541",
                            "opacity",
                            66,
                            22,
                            "linear",
                            "${source}",
                            '0',
                            '1'
                        ],
                        [
                            "eid15043",
                            "opacity",
                            27,
                            17,
                            "linear",
                            "${outOn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid15040",
                            "opacity",
                            27,
                            17,
                            "linear",
                            "${check}",
                            '0',
                            '1'
                        ],
                        [
                            "eid15053",
                            "opacity",
                            27,
                            17,
                            "linear",
                            "${btnHistory}",
                            '0',
                            '1'
                        ],
                        [
                            "eid15050",
                            "opacity",
                            27,
                            17,
                            "linear",
                            "${radioBoxAge}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11538",
                            "opacity",
                            27,
                            17,
                            "linear",
                            "${history}",
                            '0',
                            '1'
                        ],
                        [
                            "eid15051",
                            "opacity",
                            27,
                            17,
                            "linear",
                            "${radioBoxSource}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11540",
                            "opacity",
                            27,
                            17,
                            "linear",
                            "${age}",
                            '0',
                            '1'
                        ],
                        [
                            "eid16407",
                            "display",
                            0,
                            0,
                            "linear",
                            "${btn_ver2On}",
                            'none',
                            'none'
                        ],
                        [
                            "eid15048",
                            "opacity",
                            27,
                            17,
                            "linear",
                            "${btnCandidates}",
                            '0',
                            '1'
                        ],
                        [
                            "eid15059",
                            "opacity",
                            27,
                            17,
                            "linear",
                            "${btn_ver1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11537",
                            "opacity",
                            66,
                            22,
                            "linear",
                            "${outSource}",
                            '0',
                            '1'
                        ],
                        [
                            "eid15041",
                            "opacity",
                            27,
                            17,
                            "linear",
                            "${radioBoxSourceOn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid15044",
                            "opacity",
                            27,
                            17,
                            "linear",
                            "${checkCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid15042",
                            "opacity",
                            27,
                            17,
                            "linear",
                            "${checkHistory}",
                            '0',
                            '1'
                        ],
                        [
                            "eid15046",
                            "opacity",
                            27,
                            17,
                            "linear",
                            "${radioBoxAgeOn}",
                            '0',
                            '1'
                        ],
                        [
                            "eid15049",
                            "opacity",
                            27,
                            17,
                            "linear",
                            "${Show_History}",
                            '0',
                            '1'
                        ],
                        [
                            "eid11536",
                            "opacity",
                            27,
                            17,
                            "linear",
                            "${outAge}",
                            '0',
                            '1'
                        ],
                        [
                            "eid15045",
                            "opacity",
                            27,
                            17,
                            "linear",
                            "${checkCandidates}",
                            '0',
                            '1'
                        ],
                        [
                            "eid15047",
                            "opacity",
                            27,
                            17,
                            "linear",
                            "${historyOn}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("InteractivePipeline_scale_edgeActions.js");
})("EDGE-7349787");
