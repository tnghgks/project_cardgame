 # ⚡️ 포켓몬 카드 게임
 
<img src="https://user-images.githubusercontent.com/72817156/205776380-b4879537-7d38-456f-9427-5226b0e28987.gif" width="1440">
<a href="https://tnghgks.github.io/project_cardgame/">▶️ 포켓몬 카드 게임 하러가기</a>
<br><br>
 
## 📝 About Project

### 카드를 뒤집어 같은 그림을 찾아 스코어를 내는 게임

-   이미지 스프라이트 기법을 이용해 포켓몬 이미지 렌더링
-   Vanilla Javascript로 웹 컴포넌트화
-   이벤트 위임을 이용한 기능 구현

<br>

## 📕 Description
### 메인 화면
<img width="1440" alt="스크린샷 2022-12-05 오후 8 28 01" src="https://user-images.githubusercontent.com/72817156/205626457-56102524-223c-46b0-9939-7eb02b37772e.png">

- 각 버튼을 클릭하면 난이도별로 게임을 실행할 수 있습니다.
- 하단의 스코어 정보는 게임 종료 후 업데이트 됩니다.
<br>

### 카드 렌더
<img width="1440" alt="스크린샷 2022-12-05 오후 8 28 54" src="https://user-images.githubusercontent.com/72817156/205627137-1f62af9f-7340-4499-9d27-59bcb898690e.png">

- 난이도별로 카드가 렌더링되고, 몇 초간 카드의 앞 면을 보여줍니다.
- 게임이 시작되는 즉시 타이머가 실행됩니다.
<br>

### 카드 맞추기
<img width="1440" alt="스크린샷 2022-12-05 오후 8 29 18" src="https://user-images.githubusercontent.com/72817156/205627277-69158066-72ca-47e1-9ad1-97bf3b8b9ca6.png">

- 시간 안에 두 개의 카드를 뒤집으며 게임을 진행합니다.
<br>

### 타임아웃될 경우
<img width="1440" alt="스크린샷 2022-12-05 오후 8 29 30" src="https://user-images.githubusercontent.com/72817156/205627308-8bf44944-3dce-4da9-8f90-8f96379b941b.png">

- 제한된 시간 안에 같은 카드를 다 찾지 못한 경우 게임이 종료되고 모달창이 띄워집니다.
- 총 점수, 맞춘 횟수, 틀린 횟수가 표시됩니다.
<br>

### 시간 안에 성공한 경우
<img width="1440" alt="스크린샷 2022-12-05 오후 8 30 15" src="https://user-images.githubusercontent.com/72817156/205627332-47b958bf-a3c0-401b-a711-9d6660a981b0.png">

- 시간 안에 카드를 다 찾은 경우 게임이 종료되고 모달창이 띄워집니다.
- 클리어한 시간과 총 점수, 맞춘 횟수, 틀린 횟수가 표시됩니다.
<br>

### 메인 화면의 스코어 보드
<img width="1440" alt="스크린샷 2022-12-05 오후 8 30 24" src="https://user-images.githubusercontent.com/72817156/205627387-34f9f335-013b-4554-bc05-3e806cee4351.png">

- 게임 종료 후, 스코어 보드의 정보가 변경됩니다.
- 이때의 정보는 로컬스토리지에 저장되어 있는 누적된 정보를 출력합니다.

<br><br>

## 🪄 Tech Stack

-   `HTML/CSS`
-   `JavaScript`
