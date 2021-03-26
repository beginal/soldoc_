

JavaScript, React, Redux-toolkit, Styled-components, react-router-dom 등을 사용해 제작했습니다.

![image_9](https://user-images.githubusercontent.com/44854708/112672405-c83ba700-8ea6-11eb-98ed-537a0a9068df.png)

기본 화면입니다. 날짜를 클릭하면 DatePicker 라이브러리를 사용해 날짜를 지정할 수 있습니다.

![_152](https://user-images.githubusercontent.com/44854708/112672385-c540b680-8ea6-11eb-9c41-1d87c2f09e57.png)

![_153](https://user-images.githubusercontent.com/44854708/112672390-c5d94d00-8ea6-11eb-8834-e742bbfb03ff.png)

DatePicker 공식 사이트를 참고하여 커스텀했습니다.

현재 날짜부터, 7일후 까지만 선택 가능하게 지정했습니다.

![image_5](https://user-images.githubusercontent.com/44854708/112672401-c7a31080-8ea6-11eb-9283-ed84b8481de5.png)

날짜를 지정한 후, 시간을 선택합니다. 선택하지 않고 넘어갈경우 alert이 뜨게 만들었습니다.

![_155](https://user-images.githubusercontent.com/44854708/112672393-c671e380-8ea6-11eb-9391-0cd96f35de72.png)

시간대의 경우 기본적으로 어떻게 정해지는지 알수 없어서 배열에 임의의 시간들을 집어넣었습니다.
값을 빈값으로  바꿀경우 "진료 가능한 시간이 없습니다"를 뜨게 만들었습니다.



![image_8](https://user-images.githubusercontent.com/44854708/112672403-c7a31080-8ea6-11eb-9989-dac5293c1902.png)

날짜, 시간, 추가사항(옵션)을 넣고 예약을 누르면 다음 페이지로 이동합니다.

Redux를 통해 전역으로 저장된 값을 다시 불러옵니다.

추가사항은 기본값 disabled={true}로 수정이 막혀있으며 수정하기 버튼을 통해 boolean값을 toggle 할수 있습니다.

![_154](https://user-images.githubusercontent.com/44854708/112672391-c671e380-8ea6-11eb-895e-bc9dcee9e087.png)

수정중일땐 확인 버튼을 눌러도 넘어가지 않도록 만들었습니다.





#### 실행방법



```bash
npm install
npm run start
```



시간이 하루밖에 없어 빠르게 제작하다보니,  지금은 보이지 않는 에러나 비효율적인 코드가 많을수도 있을것 같습니다.  다음에 기회가 된다면 조금 더 다듬어보겠습니다.

