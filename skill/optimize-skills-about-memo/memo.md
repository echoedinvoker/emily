# **_Skill: Insert Bandicam Images to VIM_**

## **Original Version**

- https://github.com/echoedinvoker/emily/blob/master/skill/insert-pics-to-memo/memo.md

## **use DA to replace userfill**

![Alt check if VSCode on the top logic ](pic/bandicam%202022-09-24%2014-53-00-078.jpg)

- More robust way to enter VSCode Interface.

![Alt check if VSCode on top logic (VSCode UI) ](pic/bandicam%202022-09-24%2014-55-42-322.jpg)

- Every waitFor API now uses area boundaries to increase reliability.
  - The disadvantage is that before using skill, VSCode must be opened and presented in full screen by default.

![Alt get picPath and projPath by parsing VSCode current project path ](pic/bandicam%202022-09-24%2014-59-08-180.jpg)

- We can use VSCode's currently open project folder path to resolve the paths we need, so we don't need the userfill WAP here.
  - The disadvantage is that VSCode must be opened with the correct project before using skill.

## **Update Original DA**

![Alt add empty line between images ](pic/bandicam%202022-09-24%2015-05-06-378.jpg)

- If there are more than one DA in a skill, the CROP captured by the previous DA can be used by the subsequent DA directly, so there is no need to set the CROP repeatedly.
  - CROP in fact is also a workspace folder of the picture file, so what CROP can be used at present, you can look directly at the workspace folder.

# **_Skill: Index Metadata of memo to Elasticsearch_**

## **Original Version**

- https://github.com/echoedinvoker/emily/blob/master/skill/index-memo-to-elasticsearch/memo.md

![Alt new userfill ](pic/bandicam%202022-09-24%2015-11-03-120.jpg)

![Alt step condition flow ](pic/bandicam%202022-09-24%2015-13-21-416.jpg)

![Alt condition logic(script wap) ](pic/bandicam%202022-09-24%2015-13-36-840.jpg)

![Alt get github link from VSCode current path(code) ](pic/bandicam%202022-09-24%2015-17-32-059.jpg)

![Alt (script) userfill or result from udemy website DA ](pic/bandicam%202022-09-24%2015-21-57-749.jpg)
