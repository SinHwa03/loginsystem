
//메뉴 생성기 종료 E==============================
//데이터 아키텍처{sub_title:"",sub_content:"",sub_img:[],user_fill:""}
let data_sets=[]
class DataSet{
	constructor(sub_title,menuNum){this.sub_title=sub_title}
	user_fill=""
	sub_content=[]
	sub_img=[]
	set_content(content){this.sub_content.push(content)}
	set_img(num,obj){
		if(!this.sub_img[num]){this.sub_img[num]=[]}
		this.sub_img[num].push(obj)
	}
	set_fill(ufill){this.user_fill=ufill}	 
}
//******************************* build describe ************************************************ 
// 포트폴리오제시항목의 1. 
//let d1 = new DataSet("개발환경구축")// 메뉴별 타이틀입니다. menu.js에서 설정되어 있어야 하며 menu0.url = "?menu=0" 의 숫자와 data_sets 의 배열 인덱스와 동일해야 합니다.
// 포트폴리오 제시항목의 1-1
//d1.set_content("서브컨텐츠") // 각 메뉴별 화면을 구성하는 화면 구성요소입니다. 
// 포트폴리오 제시항목의 1-1 내용별 컨텐츠
//d1.set_img(항목별인덱스,{imgtitle:"요구사항명세",imgurl:"구글이미지주소",imglog:"이미지에대한 설명",sourceurl:"작성된 문서등 관련링크 주소"}) 
// 항목별 인덱스는 1-1 제시항목별 입력값인 정수 인덱스 입니다. set_content 인덱스 순서와 맞아야 합니다.
//  set_content는 입력순서별 인덱스로 0 부터 시작입니다.

let d1 = new DataSet("개발환경구축")//메인 타이틀 //메뉴번호
d1.set_content("사용자의 로그인 기능을 구현하여 로그인 사용자와 비로그인 사용자에 제공 서비스를 구분한다.")//서브 타이틀
d1.set_img(0,{imgtitle:"요구사항명세",imgurl:"https://drive.google.com/file/d/1hbGuMWhrcs6Hv62J-y9iT4LZTJtNtL0v/view?usp=drive_link",imglog:"작성된 요구사항 명",sourceurl:"https://docs.google.com/document/d/12BAfQKDbCfcqo6IXdUU6NfHFf9o1VzfOKAnPfylVzPQ/edit?usp=drive_link"})//이미지타이틀


d1.set_content("목표 시스템 개발을 위한 적정한 언어를 선정하고 라이선스와 향후 지원사항을 참고하여 결정한다.")
d1.set_img(1,{imgtitle:"개발언어선정",imgurl:"https://drive.google.com/file/d/1zp53JGGs1NefJ7Es7dqDek27aE9aCYCX/view?usp=drive_link",imglog:"자바언어기반 스프링프레임워크, html5, memberData file",sourceurl:"https://docs.google.com/document/d/1DWyaMQSngB95aTr9jLr-R0fzMNVuzq277kDQnTksNd0/edit?usp=drive_link"})//이미지타이틀
d1.set_img(1,{imgtitle:"스프링프레임워크",imgurl:"https://drive.google.com/file/d/1HRUQhj2Tk6AzIW_NSRD59wGUAduJYTmW/view?usp=drive_link",imglog:"오픈소스 스프링프레임워크 v4.221",sourceurl:""})//이미지타이틀


d1.set_content("코딩개발도구와 테스트 및 빌드, 패키징, 배포등 개발 전반에 대한 필요한 환경을 설정한다.")
d1.set_img(2,{imgtitle:"개발환경 구축 명세",imgurl:"https://drive.google.com/file/d/1K-ERdjvSjSf3WFwCkrGWkyVYPS8srQ_z/view?usp=drive_link",imglog:"운영체제 및 개발에 필요한 환경을 고려하여 개발도구, 테스트도구, 빌드도구, 패키징도구, 형상관리도구등을 결정",sourceurl:"https://docs.google.com/document/d/1OEOPP45fRHMbZvr_RUjUYNZZvK9UE7YdYKUBxUEiOf8/edit?usp=drive_link"})//이미지타이틀
d1.set_img(2,{imgtitle:"개발도구 Spring for Eclipse",imgurl:"https://drive.google.com/file/d/1WYvIeyOEu8ng107VWvFBpA6R6CltkpN6/view?usp=drive_link",imglog:"자바 스프링 서버단 개발을 위한 도구",sourceurl:""})//이미지타이틀
d1.set_img(2,{imgtitle:"텍스트도구 JUnit",imgurl:"https://drive.google.com/file/d/1GDIlZ5MGgt-r3YUYmqwEZpsC_AUn9DBv/view?usp=drive_link",imglog:"자바 프로그래밍 언어용 단위 테스트 프레임워크",sourceurl:""})//이미지타이틀
d1.set_img(2,{imgtitle:"빌드도구 Gradle",imgurl:"https://drive.google.com/file/d/1q5KiWOXZ6tPBHiK-sLli_4xoHAI9WFFG/view?usp=drive_link",imglog:"프로그램 빌드 및 외부 라이브러리 디펜더시를 위한 도구",sourceurl:""})//이미지타이틀
d1.set_img(2,{imgtitle:"형상관리도구 Git",imgurl:"https://drive.google.com/file/d/1rqm-ylChdJXjG7zG6XbZMk1i6mh2lJjU/view?usp=drive_link",imglog:"프로그램의 전반적인 개발협업 및 버전관를 위한 도구",sourceurl:""})//이미지타이틀

d1.set_fill("서버의 보안성과 각 수행기능별 패턴을 분리하기 위해 Spring WAS 와 사용자 View 기능을 위해 웹브라우져에서 일반적인 작동이 가능한 HTML5 를 구현하며 데이터베이스 연동 대신 파일로 회원목록 저장")//사용자 에필로그
data_sets.push(d1)

// menu2 =============================================================
let d2 = new DataSet("공통모듈구현")//메인타이틀

d2.set_content("공통모듈구현을 작성합니다.")//서브 타이틀
d1.set_img(0,{imgtitle:"",imgurl:"https://drive.google.com/file/d/1qfGcNouQ5508-TLtcoynNcypJnCQnQjk/view?usp=drive_link",imglog:"로그인,로그아웃 함수 분리",sourceurl:""})//이미지타이틀
d1.set_img(0,{imgtitle:"",imgurl:"https://drive.google.com/file/d/1WbKbrdrupwrokYqnsQz-B7851OaiXW4F/view?usp=drive_link",imglog:"작성된 공통모듈",sourceurl:""})//이미지타이틀
d1.set_img(0,{imgtitle:"공통모듈 테스트 작성",imgurl:"https://drive.google.com/file/d/1uQbFw4iveprEd-lkxwePkbyLWewB7u88/view?usp=drive_link",imglog:"테스트페이지 작성",sourceurl:""})//이미지타이틀
d1.set_img(0,{imgtitle:"공통모듈 구현",imgurl:"https://drive.google.com/file/d/1JZThtiBQIcEaT78fO_7KDqsE1QIInFPG/view?usp=drive_link",imglog:"테스트페이지",sourceurl:""})//이미지타이틀
d1.set_img(2,{imgtitle:"공통모듈 구현",imgurl:"https://drive.google.com/file/d/1hvFh9PlzgpixzYFgIgbpSGddwjUiixYI/view?usp=drive_link",imglog:"가입한 회원 아이디와 비밀번호 입력",sourceurl:""})//이미지타이틀
d1.set_img(2,{imgtitle:"로그인/로그아웃",imgurl:"https://drive.google.com/file/d/1lZEcOqUC8Rjj6n8bC_iCSkfzSlHOxK9T/view?usp=drive_link",imglog:"로그인과 로그아웃 테스트 성공",sourceurl:""})//이미지타이틀

d2.set_content("테스트케이스를 작성합니다.")
d1.set_img(1,{imgtitle:"테스트케이스 진행",imgurl:"https://drive.google.com/file/d/1tM8LGD_omFpYqNCyi15MhTToRCPuvDmm/view?usp=drive_link",imglog:"테스트케이스 진행",sourceurl:""})//이미지타이틀

d2.set_content("단위테스트를 작성합니다.")
d1.set_img(2,{imgtitle:"단위테스트",imgurl:"https://drive.google.com/file/d/1hvFh9PlzgpixzYFgIgbpSGddwjUiixYI/view?usp=drive_link",imglog:"",sourceurl:""})//이미지타이틀
d1.set_img(2,{imgtitle:"단위테스트 결과",imgurl:"https://drive.google.com/file/d/1jRF3wGfKS_TfoGjz9aFRvHRmr8cO0WWk/view?usp=drive_link",imglog:"",sourceurl:""})//이미지타이틀


d2.set_fill("사용자와 프로그램간에 인터렉티브한 로그인 세션 설정")//사용자 에필로그
data_sets.push(d2)

// menu3 =============================================================
let d3 = new DataSet("서버프로그램구현")//메인타이틀
d3.set_content("회원가입구현")//서브타이틀
d3.set_img(0,{imgtitle:"메인화면",imgurl:"https://drive.google.com/file/d/1SB34bbM0QuCRBo-_3iAM1Io_4L-N_t13/view?usp=drive_link",imglog:"메인페이지에서 회원가입 버튼 구현",sourceurl:""})//이미지타이틀
d3.set_img(0,{imgtitle:"회원가입페이지",imgurl:"https://drive.google.com/file/d/1Le-gaKI875jLSVaPUkFPLNr6d3fJwWIl/view?usp=drive_link",imglog:"회원가입을 위한 회원정보 입력",sourceurl:""})//이미지타이틀
d3.set_img(0,{imgtitle:"회원가입 성공",imgurl:"https://drive.google.com/file/d/15C4yxuZK_ivt2jPbz9_7jqHggZ6b615N/view?usp=drive_link",imglog:"조건 만족 시 회원가입 성공창",sourceurl:""})//이미지타이틀
d3.set_img(0,{imgtitle:"연동된 컨트롤러 구현",imgurl:"https://drive.google.com/file/d/1KuRZXiL3p_2zeVi0kuyfCckhl2n2vm_C/view?usp=drive_link",imglog:"아이디: 4글자이상,비밀번호: 6글자이상으로 컨트롤러 구현",sourceurl:""})//이미지타이틀
d3.set_img(0,{imgtitle:"회원가입 조건",imgurl:"https://drive.google.com/file/d/1aK6gzl_RHbh4nYGOPVwHEbPopHSv-uvS/view?usp=drive_link",imglog:"회원가입시 조건항목 및 순서",sourceurl:""})//이미지타이틀
d3.set_img(0,{imgtitle:"서비스로직",imgurl:"https://drive.google.com/file/d/1eyptoWH6XAV76dHyieYkaUAh7OgycZMC/view?usp=drive_link",imglog:"회원가입에 성공한 아이디,비밀번호,이름,나이,주소 데이터베이스 저장",sourceurl:""})//이미지타이틀
d3.set_img(0,{imgtitle:"가입된 회원정보 데이터베이스 저장",imgurl:"https://drive.google.com/file/d/1v6H5IDsoLvo-KVsHJx1kf_g9owPWKa4_/view?usp=drive_link",imglog:"서비스로직에서 유효성 점검",sourceurl:""})//이미지타이틀

d3.set_content("회원로그인구현")//서브타이틀
d3.set_img(1,{imgtitle:"회원로그인 구현",imgurl:"https://drive.google.com/file/d/1LJbuAhlg_GAO9-wBrDVUlOclC9n_aaEJ/view?usp=drive_link",imglog:"가입한 로그인 정보 입력",sourceurl:""})//이미지타이틀
d3.set_img(1,{imgtitle:"로그인 성공",imgurl:"https://drive.google.com/file/d/1erLHX1AclRc3g8mc0mXXTGaSySPZlTim/view?usp=drive_link",imglog:"데이터베이스에 저장된 회원 아이디,비밀번호로 로그인 성공",sourceurl:""})//이미지타이틀
d3.set_img(1,{imgtitle:"로그인 실패",imgurl:"https://drive.google.com/file/d/1-ohMvCTjRxgzaG-OvDQJlxTvHf1RyQAR/view?usp=drive_link",imglog:"데이터베이스에 저장된 회원 아이디,비밀번호가 틀릴 시 로그인 실패",sourceurl:""})//이미지타이틀
d3.set_img(1,{imgtitle:"로그인 시스템",imgurl:"https://drive.google.com/file/d/1ZybbMIuk65c72rF2F4lhp7iiTi-nhwix/view?usp=drive_link",imglog:"로그인을 위한 컨트롤러 구현",sourceurl:""})//이미지타이틀

d3.set_content("회원로그아웃구현")//서브타이틀
d3.set_img(2,{imgtitle:"로그아웃",imgurl:"https://drive.google.com/file/d/1fTFBEfaA6zt-bUvGCI84_A01gEjjmhGo/view?usp=drive_link",imglog:"로그아웃 버튼 구현",sourceurl:""})//이미지타이틀
d3.set_img(2,{imgtitle:"로그아웃 요청",imgurl:"https://drive.google.com/file/d/1aPlJG98Qq2MoowxShM2BcB70Af8JyhCW/view?usp=drive_link",imglog:"로그아웃 버튼 클릭시 로그아웃 처리",sourceurl:""})//이미지타이틀
d3.set_img(2,{imgtitle:"로그인 세션 만료",imgurl:"https://drive.google.com/file/d/1VuAyF3cIK6Ac1tCu7zoGYIaSd_q4ersH/view?usp=drive_link",imglog:"로그아웃 완료시 문구출력",sourceurl:""})//이미지타이틀

d3.set_content("회원리스트연동")//서브타이틀
d3.set_img(3,{imgtitle:"회원리스트",imgurl:"https://drive.google.com/file/d/1Sh8Y0MoggV59J1LyugGAL81ogEbgrip2/view?usp=drive_link",imglog:"회원리스트보기 버튼 구현",sourceurl:""})//이미지타이틀
d3.set_img(3,{imgtitle:"회원리스트 요청",imgurl:"https://drive.google.com/file/d/1iO4GOqxK_GOO44TQ8E_IlTFUrZdekhOZ/view?usp=drive_link",imglog:"회원리스트보기 버튼 구현",sourceurl:""})//이미지타이틀
d3.set_img(3,{imgtitle:"회원리스트 출력",imgurl:"https://drive.google.com/file/d/1nB9Wtp4rTFhpSpJ05qP1zq6j4DEXxzjZ/view?usp=drive_link",imglog:"",sourceurl:""})//이미지타이틀
d3.set_img(3,{imgtitle:"회원리스트 출력 구현",imgurl:"https://drive.google.com/file/d/1r3AIX0iPMZPJM5mFADHoT39qlipJ9_pW/view?usp=drive_link",imglog:"가입한 회원 정보를 기반으로 회원리스트 데이터 불러오기",sourceurl:""})//이미지타이틀

d3.set_fill("사용자와 프로그램간에 인터렉티브한 로그인 세션 설정")//사용자 에필로그
data_sets.push(d3)

// menu4 =============================================================
let d4 = new DataSet("배치프로그램구현")//메인타이틀
d4.set_content("배치스케줄구현")//서브타이틀
d3.set_img(0,{imgtitle:"배치스케줄 구성",imgurl:"https://drive.google.com/file/d/1Sh8Y0MoggV59J1LyugGAL81ogEbgrip2/view?usp=drive_link",imglog:"배치스케줄 구성 위한 JOB 구현 ",sourceurl:""})//이미지타이틀
d3.set_img(0,{imgtitle:"배치스케줄 구성2",imgurl:"https://drive.google.com/file/d/115WTE6wAsSpovqFMFbkye9pA8KmJ5Ici/view?usp=drive_link",imglog:"배치스케줄이 적상적으로 작동하며 5분마다 주기적으로 실행",sourceurl:""})//이미지타이틀
d4.set_content("배치프로그램테스트 구현")//서브타이틀
d3.set_img(0,{imgtitle:"배치프로그램 테스트",imgurl:"https://drive.google.com/file/d/1RSyuWNPfVFMi1jQ61Cqi19w2Qg2SUf2Q/view?usp=drive_link",imglog:"배치스케줄 정상 작동 확인",sourceurl:""})//이미지타이틀

d3.set_fill("사용자와 프로그램간에 인터렉티브한 로그인 세션 설정")//사용자 에필로그
data_sets.push(d4)
