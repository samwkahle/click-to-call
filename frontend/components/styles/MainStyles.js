import styled from 'styled-components';

const MainStyles = styled.div`

  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,800,900&display=swap');

  h1, h2, h3, h4, h5, h6, p, a, li, label, button, input {
    font-family: 'Montserrat', sans-serif;
  }

  a:hover, button:hover {
    cursor: pointer;
  }

  .hidden {
    display: none !important;
  }

  .expired {
    width: 80%;
    margin: 100px auto;
    font-size: 50px;
  }

  #candidateSearch {
    width: 100%;
    margin: 0 0 -1px auto;
    border: 1px solid #000;
    padding: 10px;
    box-sizing: border-box;
    input {
      padding: 5px 15px;
      font-size: 16px;
      width: 30%;
      border-radius: 20px;
    }
  }

  #targetPeopleContainer {
    height: 520px;
    overflow: scroll;
    border: 0px solid black;
    // box-shadow: 0px 0px 5px black;
  }

  #createCampaignItem {
      max-width: 1000px;
      margin: 0 auto;
      display: block;
      h1 {
        font-size: 50px;
        margin: 0;
      }
  }

  .resetList {
    float: right;
  }

  #createCampaignScriptItem {
    max-width: 1000px;
    margin: 0 auto;
    display: block;
    button[type="submit"] {
        margin: 100px 0 10px;
        font-size: 20px;
        text-indent: 10px;
        width: 200px;
        border: 0;
        color: white;
        background: #2D4C6B;
        padding: 20px 0px;
    }
}

  #settargettitle {
    width: 65%;
    font-size: 20px;
    padding: 10px 0;
    text-indent: 10px;
  }
  #connectkey {
    width: 45%;
    font-size: 20px;
    padding: 10px 0;
    text-indent: 10px;
  }
  #customURL {
    width: 50%;
    font-size: 20px;
    padding: 10px 0;
    display:block;
    text-indent: 10px;
  }
  .radiobtn-section {
      margin: 50px 0;
      h3 {
        margin: 0;
      }
      label {
        margin-right: 30px;
      }
      select {
        -webkit-appearance: none;
        width: 100px;
        font-size: 20px;
        margin-left: 10px;
        background: white;
        border: none;
        font-weight: 600;
      }
  }
  #generateURLAlias {
    -webkit-appearance:none;
    width:30px;
    height:30px;
    background:white;
    border:2px solid #ccc;
    display: inline-block;
    vertical-align: middle;
    margin-right: 10px;
   }
#generateURLAlias:checked {
    background: #333;
}

label p {
    display: inline-block;
    vertical-align: middle;
}
.URLPathSettings {
    label {
        display:block;
    }
    h2 {
        margin: 0;
    }
}
.upload-files {
    button {
      padding: 10px 40px;
      background: #2D4C6B;
      display: block;
      width: 300px;
      font-size: 20px;
      text-align: center;
      color: white;
      margin-bottom: 5px;
      margin-top: 50px
    }
}
.onoffswitchcontainer {
    position: absolute;
    top: 10px;
    right: 10%;
    text-align: center;
}

.onoffswitch {
    position: relative;
    width: 90px;
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select: none;
}
.onoffswitch-checkbox {
    display: none;
}
.onoffswitch-label {
    display: block;
    overflow: hidden;
    cursor: pointer;
    border: 2px solid #999999;
    border-radius: 20px;
}
.onoffswitch-inner {
    display: block;
    width: 200%;
    margin-left: -100%;
    transition: margin 0.3s ease-in 0s;
}
.onoffswitch-inner:before, .onoffswitch-inner:after {
    display: block;
    float: left;
    width: 50%;
    height: 30px;
    padding: 0;
    line-height: 30px;
    font-size: 14px;
    color: white;
    font-family: Trebuchet, Arial, sans-serif; font-weight: bold;
    box-sizing: border-box;
}
.onoffswitch-inner:before {
    content: "ON";
    padding-left: 10px;
    background-color: #D56D6D;
    color: #FFFFFF;
}
.onoffswitch-inner:after {
    content: "OFF";
    padding-right: 10px;
    background-color: #EEEEEE;
    color: #999999;
    text-align: right;
}
.onoffswitch-switch {
    display: block;
    width: 22px;
    margin: 6px;
    background: #FFFFFF;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 56px;
    border: 2px solid #999999;
    border-radius: 20px;
    transition: all 0.3s ease-in 0s;
}
.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-inner {
    margin-left: 0;
}
.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-switch {
    right: 0px;
}
.editbtn {
    background: #2D4C6B;
    color: white;
    padding: 1px 0;
    width: 90px;
    margin-right: 10px;
    text-align: center;
    display: inline-block;
}
.dupbtn {
    background: #D56D6D;
    color: white;
    padding: 1px 0;
    width: 90px;
    text-align: center;
    display: inline-block;
}
td:last-child, th:last-child {
    border-right: none;
    border-left: none;
    width: auto !important;
    text-align: right;
}
td, th {
    border-right: 0;
    border-bottom: 2px solid #EDEDED;
    text-align: center;
}
a.createnew {
    color: #2D4C6B;
    font-size: 1.2em;
    margin: 20px auto;
    display: block;
    max-width: 1000px;

}
.dashboardh1 {

    margin: 20px auto;
    display: block;
    max-width: 1000px;

}
.onexp {
    color: green;
}
.offexp {
    color: red;
}


#searchTypeToggle {
    width:100%;
    box-sizing:border-box;
    background-color:white;
    box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.4);
    text-align:center;
    position:relative;
    border-radius:2px;
    label {
        float:left;
        width:calc(33.333% - 1px);
        position:relative;
        padding:20px 0px 40px;
        overflow:hidden;
        border-left:solid 1px rgba(0,0,0,0.2);
        transition:color 0.3s;
        cursor:pointer;
        -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
        input {
            position:absolute;
            top:-200%;
          }
        div {
            z-index: 5;
            position: absolute;
            width: 100%;
          }
      }
    label:first-child {
        border-left:none;
      }
  }

  #searchTypeToggle > div {
    color:white;
    padding-top:24px;
    display:block;
    position:absolute;
    top:-4px;
    left:-4px;
    bottom:-4px;
    width:calc(33.33% + 8px);
    background-color: rgba(50, 150, 100,1);
    border-radius:2px;
    box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.4);
    z-index:1;
    pointer-events:none;
    transition:transform 0.3s;
  }

  #searchTypeToggle::after {
    content:"";
    display:block;
    clear:both;
  }

  #searchTypeToggle label.selected {
    color:white;
  }

  #newVersionName {
    width: 65%;
    font-size: 20px;
    text-indent: 10px;
    padding: 10px 0px;
  }

  #thankYouTitle {
    width: 100%;
    margin-bottom: 10px;
    font-size: 20px;
    text-indent: 10px;
    padding: 10px 0px;
  }

  .ck-content {
    height: 200px;
  }

  .setTargetingCondition {
      textarea {
        width:100%;
        height: 200px;
      }
      select {
        width: 300px;
        background: white;
        padding: 5px 0;
        text-indent: 10px;
        font-size: 14px;
        border: 1px solid black;
        border-radius: 0;
        -webkit-appearance: none;
        margin-bottom: 10px;
      }
      .newConditionRow {
          select:last-child {
              // margin-left: 30px;
          }
      }
  }

  .tabs {
      border: solid #000;
      border-width: 0px 1px 1px 1px;
      margin-top: 50px;
      background: #eee;
  }

  #emailTitle, #facebookTitle, #twitterTitle {
    width: 100%;
    font-size: 20px;
    text-indent: 10px;
    margin-bottom: 10px;
    padding: 10px 0px;
  }
  #emailBody {
    width: 100%;
    font-size: 20px;
    text-indent: 10px;
    margin-bottom: 10px;
    padding: 10px 0px;
  }

  .tab-list {
    border-bottom: 1px solid #fff;
    padding-left: 0;
    margin: 0;
  }

  .sharebody {
      padding: 25px;
  }

  .tab-list-item {
    display: inline-block;
    list-style: none;
    margin-bottom: -1px;
    width: 33.333%;
    background: #ccc;
    text-align: center;
    border: 1px solid #111;
    padding: 0.5rem 0.75rem;
  }

  .tab-list-active {
    background-color: #eee;
    border: solid #000;
    border-width: 1px 0px 0 0px;
  }
  #facebookBody {
    margin-bottom: 10px;
    font-size: 20px;
    text-indent: 10px;
    width: 100%;
    display: inline-block;
    padding: 10px 0px;
  }
  #facebookURL {
    margin-bottom: 10px;
    font-size: 20px;
    text-indent: 10px;
    width: 50%;
    margin-right: 0%;
    display: inline-block;
    padding: 10px 0px;
  }
  #facebookTitle {
    margin-bottom: 10px;
    font-size: 20px;
    text-indent: 10px;
    width: 47%;
    margin-right: 3%;
    display: inline-block;
    padding: 10px 0px;
  }

  #twitterTitle {
    margin-bottom: 10px;
    font-size: 20px;
    text-indent: 10px;
    width: 47%;
    margin-right: 3%;
    display: inline-block;
    padding: 10px 0px;
  }

  #twitterURL {
    margin-bottom: 10px;
    font-size: 20px;
    text-indent: 10px;
    width: 50%;
    margin-right: 0%;
    display: inline-block;
    padding: 10px 0px;
  }

  #twitterBody {
    margin-bottom: 10px;
    font-size: 20px;
    text-indent: 10px;
    width: 100%;
    margin-right: 3%;
    display: inline-block;
    padding: 10px 0px;
  }

  .frontEndPage {
    .frontEndHero {
      display: flex;
        .heroLeft {
            background: #2D4C6B;
            display: inline-block;
            vertical-align: middle;
            padding: 50px;
            width: 60%;
            h1, h2, h3, h4, h5, h6, p, a, li {
                color: white;
            }
            h2 {
              font-size: 36px;
              color: #fff;
              text-transform: uppercase;
            }
        }
        .heroRight {
            background: #6C9FC2;
            vertical-align: middle;
            display: inline-block;
            padding: 20px 50px;
            width: 40%;
            h3 {
                color: white;
                text-align: center;
                line-height: 125%;
                font-size: 16px;
            }
            form {
                input[type="text"] {
                    margin-bottom: 10px;
                    font-size: 20px;
                    text-indent: 10px;
                    border: 0;
                    width: 100%;
                    margin-right: 3%;
                    display: inline-block;
                    padding: 10px 0px;
                }
                input[type="number"] {
                  margin-bottom: 10px;
                  font-size: 20px;
                  text-indent: 10px;
                  border: 0;
                  width: 100%;
                  margin-right: 3%;
                  display: inline-block;
                  padding: 10px 0px;
                }
                input[type="submit"] {
                    margin-bottom: 10px;
                    font-size: 20px;
                    text-indent: 10px;
                    width: 100%;
                    border: 0;
                    color: white;
                    background: #2D4C6B;
                    padding: 20px 0px;
                }
            }
            h6 {
                color: white;
                line-height: 125%;
            }
        }
    }
  }

  .stepTwoSection {
      margin: 100px 0;
    .inner {
        width: 80%;
        margin: 0 auto;
        display: block;
        .repNameScript {
            margin: 50px 0;
            h1 {
                margin: 0;
            }
            .scriptContainer {
                background: #2D4C6B;
                color: white;
                padding: 20px;
            }
        }
        h2 {
          font-size: 40px;
          margin-bottom: 0;
        }
    }
  }

  .imDone {
      background: #D56D6D;
      text-align: center;
      padding: 15px 0;
      margin: 50px 0 0;
      position: fixed;
      bottom: 0;
      width: 100%;
      button {
          background: white;
          -webkit-appearance: none;
          border: none;
          color: #6C9FC2;
          border-radius: 0;
          padding: 10px 50px;
          font-size: 18px;
      }
      a {
          color: white;
          margin-left: 30px;
          text-decoration: underline;
      }
  }

  .stepThreeSection {
    background: #2D4C6B;
    color: white;
    padding: 100px 0;
    .stepThreeContainer {
        margin: 0 auto;
        width: 80%;
        display: block;
    }
    h1 {
        font-size: 125px;
        text-align: center;
        margin: 0;
        color: #6C9FC2;
        span {
            color: #D56D6D;
        }
    }
    h2 {
      text-align: center;
      font-size: 40px;
    }
    p {
        color: white;
        text-align: center;
    }
    button {
        background: #D56D6D;
        -webkit-appearance: none;
        border: none;
        color: #fff;
        border-radius: 0;
        padding: 20px 100px;
        font-size: 18px;
        display: block;
        margin: 50px auto 0;
    }
  }

  .campaignScripts {
      h2 {
          border-bottom: 3px solid #000;
          margin: 0;
      }
      .campaignScriptItem {
          clear: both;
          border-bottom: 2px solid #000;
          h3 {
              display: inline-block;
              margin: 0 0 0;
              vertical-align: text-top;
          }
          .editCampaignScript {
            float: right;
            margin: 5px 0 0;
            text-align: center;
            a {
                background: #2D4C6B;
                color: white;
                padding: 5px 50px;

            }
            h6 {
                margin: 0;
                font-weight: 200;
            }
          }
      }
  }

  .addNewScript {
      font-size: 20px;
      color: #6C9FC2;
      font-weight: 600;
      margin: 30px 0 30px;
      display: block;
  }
  .search-div {
        width: 100%;
        margin: 10rem auto 2rem auto;
        text-align: right;
        position: relative;
      .search-box {
        border: 4px solid #08a1b6;
        border-radius: 2px;
        font-size: 2rem;
        width: 100%;
        padding: 1rem;
        transition: width 0.3s;
      }

      .search-btn {
        height: 100%;
        width: 4em;
        margin-top: -2em;
        position: absolute;
        top: 50%;
        right: 0.5rem;
        opacity: 0.2;
        background-color: transparent;
        border: 0;
        background-repeat: no-repeat;
        background-size: 100%;
        background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAACnElEQVR4AcXZsUsbYRjH8e+dh2s1SyAGJwMJuDj1BIcEhJQIOnTq5F+QOf0jIq79A7oFh7aYyVBEkaZDC3awECc1AUXRIqUQotfFocnjJe/dk+b9PKP65Md7z13ee3Uwk2SNHKmngs5TnbDLJQqjA+RYZ4OXuDzvkSYf+cAJ44fPAYFhHeAzVhlqBBGrRoax8KjSJYhRXap4KCVoECiqQQKFLC0CZbXIElOBOwJ9cUchzm2Y5QsveN4tdfY4o00HSDHHPKuUmOV5v/D5SSSJ0MXfIY+HBB55dkIvRIIIvJDR28dnFJ/9kHH0MFaVDehRxlSZnuxAFUMZunKQKBJFUQ4wXTIYqcmPZ5GoFmUEahjw5eJTJI6ivBD4jCS/csrEVZZfU4yQk5OPhrwjcoRygQ0GVdCQf73OUEfisaMkHk1HDJHkYeDX82jlBzo+kCSEyxruwDP/EK1DbsWnhHDFgNTpodWjLgY9NECKfnvoyS4p8wBngN5Z/ABtQK8dP0AH0OuYB5iMqfAAMque7HJtHmAOPdnlxjzAPHqyy5V5gFX0ZJfj8AAn9CvhoeVRol8zPMAuj/xrlhW0Vpg1D3ApflhGR3b4wTlDvI24i4u+w9y0uyVrM213U1qxuy2/Z8bui8m23VezgGW7L6cBLdIWXs9FBAsHFCLCJI9opFMKXEzkkEp/IbK0bEdI0LARQRzVWoigPKy+Z5tlWooIiuP6NhVmAEiPNwLkqHDEw5CGx2wyDQDRI8T7l80U19xwxTFNmpwzKM1nFsyeCw7jFymCAxYjrHDp8r9cUOCUYRZ4Bw6AxVV47QJYXIVXLliNsOSC1Qh/XLAa4ZuDmmIcH1l2AaytwhZfmaAkn/qOb7eYBofJekOJJX7znfccAvwFyB3OeNys7d4AAAAASUVORK5CYII=");
      }
      .search-btn:hover {
        outline: none;
        opacity: 0.4;
        cursor: pointer;
      }
      .search-btn:focus {
        outline: none;
        opacity: 0.6;
      }


  }
  ul.options {
    display: block;
    list-style: none;
    width: 30rem;
    transition: width 0.3s;
    margin: auto;
    position: relative;
  }

  ul.options li {
    display: block;
    background: white;
    margin: 10px auto;
    padding: 10px;
    font-size: 1.2rem;
    width: 100%;
    border-radius: 2px;
  }

  ul.options li:hover {
    font-weight: bold;
    color: #00b4cc;
    cursor: pointer;
    transition: 0.3s all;
  }

  ul.options li.option-active {
    background: whitesmoke;
    font-size: 1.5rem;
    color: #00b4cc;
  }

  .no-options {
    color: white;
  }

  .breadcrumb {
    font-size: 20px;
    color: #6C9FC2;
    display:block;
    margin: -45px auto 45px;
    width: 200px;
  }
  .candidatePerson {
    margin-bottom: -2px;
    border: 2px solid #000;
    padding: 10px;
    p {
      margin: 0 50px 0 0;
      width: 350px;
      display: inline-block;
      vertical-align: middle;
    }
  }

  .switch-field {
    display: inline-flex;
    margin-bottom: 7px;
    width: 350px;
    overflow: hidden;
    input {
      position: absolute !important;
      clip: rect(0, 0, 0, 0);
      height: 1px;
      width: 1px;
      border: 0;
      overflow: hidden;
    }
    label {
      background-color: #fff;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      text-transform: capitalize;
      line-height: 1;
      font-weight: 600;
      text-align: center;
      padding: 8px 16px;
      margin-right: -1px;
      border: 1px solid rgba(0, 0, 0, 0.2);
      box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.1);
      transition: all 0.1s ease-in-out;
    }
    label:hover {
      cursor: pointer;
    }
    input:checked + label {
      background-color: #EBE1D7;
      box-shadow: none;
    }
    input:checked + label.supportLabel {
      color: #427508;
    }
    input:checked + label.opposeLabel {
      color: #CA4747;
    }
    input:checked + label.otherLabel {
      color: #F9A345;
    }
    input:checked + label.noneLabel {
      color: #000;
    }
    label:first-of-type {
      border-radius: 4px 0 0 4px;
    }
    label:last-of-type {
      border-radius: 0 4px 4px 0;
    }
  }






 .tag {
  background-color: #f4f4f4;
  border: 1px solid #e9e9e9;
  padding: 2px 0 2px 2px;
  border-radius: 2px;
  display: inline-block
}

.tag:focus-within {
  background-color: #e9e9e9;
  border-color: #a0a0a0
}

.tag-remove {
  color: #a0a0a0;
  font-size: 75%;
  line-height: 100%;
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none
}

.tag-remove.disabled,
.tag-remove.readOnly {
  cursor: not-allowed
}

.tag-remove:focus {
  color: #3c3c3c
}

.node>label {
  cursor: pointer;
  margin-left: 2px
}

.tag-list {
  display: inline;
  padding: 0;
  margin: 0
}

.tag-item {
  display: inline-block;
  margin: 4px
}

.tag-item .search {
  border: none;
  border-bottom: 1px solid #ccc;
  outline: none
}

.tag-item:last-child {
  margin-right: 4px
}

.node {
  list-style: none;
  white-space: nowrap;
  padding: 4px
}

.node.leaf.collapsed {
  display: none
}

.node.disabled>* {
  color: gray;
  cursor: not-allowed
}

.node.match-in-children.hide .node-label {
  opacity: .5
}

.node.focused {
  background-color: #f4f4f4
}

.toggle {
  white-space: pre;
  margin-right: 4px;
  cursor: pointer
}

.toggle:after {
  content: " "
}

.toggle.collapsed:after {
  content: "+"
}

.toggle.expanded:after {
  content: "-"
}

.searchModeOn .toggle {
  display: none
}

.checkbox-item,
.radio-item {
  vertical-align: middle;
  margin: 0 4px 0 0
}

.checkbox-item.simple-select,
.radio-item.simple-select {
  display: none
}

.hide:not(.match-in-children) {
  display: none
}

.react-dropdown-tree-select .dropdown {
  position: relative;
  display: table;
  width: 100%;
}

.react-dropdown-tree-select .dropdown .dropdown-trigger {
  padding: 4px;
  line-height: 20px;
  min-height: 200px;
  display: inline-block;
  overflow: auto;
  width: 100%;
  border: 1px solid #b9b9b9
}

.react-dropdown-tree-select .dropdown .dropdown-trigger.arrow {
  cursor: pointer
}

.react-dropdown-tree-select .dropdown .dropdown-trigger.arrow.bottom:after {
  vertical-align: middle;
  color: #3c3c3c;
  margin-right: 2px
}

.react-dropdown-tree-select .dropdown .dropdown-trigger.arrow.top:after {
  vertical-align: middle;
  color: #3c3c3c;
  margin-right: 2px
}

.react-dropdown-tree-select .dropdown .dropdown-trigger.arrow.disabled {
  cursor: not-allowed
}

.react-dropdown-tree-select .dropdown .dropdown-trigger.arrow.disabled.bottom:after {
  color: #b9b9b9
}

.react-dropdown-tree-select .dropdown .dropdown-content {
  position: absolute;
  padding: 4px;
  z-index: 1;
  background: #fff;
  border-top: 1px solid rgba(0, 0, 0, .05);
  -webkit-box-shadow: 0 5px 8px rgba(0, 0, 0, .15);
  box-shadow: 0 5px 8px rgba(0, 0, 0, .15)
}

.react-dropdown-tree-select .dropdown .dropdown-content ul {
  margin: 0;
  padding: 0
}



`;

export default MainStyles;
