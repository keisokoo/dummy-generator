import { randomRange } from './math'
export const lastNames = [
  '민준',
  '서준',
  '예준',
  '도윤',
  '시우',
  '주원',
  '하준',
  '지호',
  '지후',
  '준서',
  '준우',
  '현우',
  '도현',
  '지훈',
  '건우',
  '우진',
  '선우',
  '서진',
  '민재',
  '현준',
  '연우',
  '유준',
  '정우',
  '승우',
  '승현',
  '시윤',
  '준혁',
  '은우',
  '지환',
  '승민',
  '지우',
  '유찬',
  '윤우',
  '민성',
  '준영',
  '시후',
  '진우',
  '지원',
  '수현',
  '재윤',
  '시현',
  '동현',
  '수호',
  '태윤',
  '민규',
  '재원',
  '한결',
  '민우',
  '재민',
  '은찬',
  '윤호',
  '시원',
  '이준',
  '민찬',
  '지안',
  '시온',
  '성민',
  '준호',
  '승준',
  '성현',
  '이안',
  '현서',
  '재현',
  '하율',
  '지한',
  '우빈',
  '태민',
  '지성',
  '예성',
  '민호',
  '태현',
  '지율',
  '민혁',
  '서우',
  '성준',
  '은호',
  '규민',
  '정민',
  '준',
  '지민',
  '윤성',
  '율',
  '윤재',
  '하람',
  '하진',
  '민석',
  '준수',
  '은성',
  '태양',
  '예찬',
  '준희',
  '도훈',
  '하민',
  '준성',
  '건',
  '지완',
  '현수',
  '승원',
  '강민',
  '정현',
  '서연',
  '서윤',
  '지우',
  '서현',
  '민서',
  '하은',
  '하윤',
  '윤서',
  '지유',
  '지민',
  '채원',
  '지윤',
  '은서',
  '수아',
  '다은',
  '예은',
  '지아',
  '수빈',
  '소율',
  '예린',
  '예원',
  '지원',
  '소윤',
  '지안',
  '하린',
  '시은',
  '유진',
  '채은',
  '윤아',
  '유나',
  '가은',
  '서영',
  '민지',
  '예진',
  '서아',
  '수민',
  '수연',
  '연우',
  '예나',
  '예서',
  '주아',
  '시연',
  '연서',
  '하율',
  '다인',
  '다연',
  '시아',
  '아인',
  '현서',
  '서은',
  '유주',
  '아린',
  '서우',
  '하연',
  '서율',
  '서진',
  '채윤',
  '유빈',
  '지율',
  '나윤',
  '수현',
  '예지',
  '다현',
  '소은',
  '나은',
  '나연',
  '지은',
  '민주',
  '아윤',
  '사랑',
  '시현',
  '예빈',
  '윤지',
  '서하',
  '지현',
  '소연',
  '혜원',
  '지수',
  '은채',
  '주하',
  '채아',
  '승아',
  '다윤',
  '소민',
  '서희',
  '나현',
  '민아',
  '채린',
  '하영',
  '세아',
  '세은',
  '도연',
  '규리',
  '아영',
  '다온',
  '가윤',
  '지연',
  '예림',
  '태희',
  '민채',
]
export const firstNames = [
  '가',
  '간',
  '갈',
  '감',
  '강',
  '개',
  '견',
  '경',
  '계',
  '고',
  '곡',
  '공',
  '곽',
  '교',
  '구',
  '국',
  '군',
  '궁',
  '궉',
  '권',
  '근',
  '금',
  '기',
  '길',
  '김',
  '나',
  '남',
  '낭',
  '내',
  '노',
  '뇌',
  '누',
  '단',
  '담',
  '당',
  '대',
  '도',
  '독',
  '돈',
  '동',
  '두',
  '류',
  '마',
  '만',
  '망',
  '매',
  '맹',
  '명',
  '모',
  '묘',
  '목',
  '무',
  '묵',
  '문',
  '미',
  '민',
  '박',
  '반',
  '방',
  '배',
  '백',
  '범',
  '변',
  '복',
  '봉',
  '부',
  '비',
  '빈',
  '빙',
  '사',
  '삼',
  '상',
  '새',
  '서',
  '석',
  '선',
  '설',
  '섭',
  '성',
  '소',
  '손',
  '송',
  '수',
  '순',
  '승',
  '시',
  '신',
  '심',
  '아',
  '안',
  '애',
  '야',
  '양',
  '어',
  '엄',
  '여',
  '연',
  '염',
  '영',
  '예',
  '오',
  '옥',
  '온',
  '옹',
  '왕',
  '요',
  '용',
  '우',
  '운',
  '원',
  '위',
  '유',
  '육',
  '윤',
  '은',
  '음',
  '이',
  '인',
  '임',
  '자',
  '장',
  '전',
  '점',
  '정',
  '제',
  '조',
  '종',
  '좌',
  '주',
  '준',
  '지',
  '진',
  '즙',
  '차',
  '창',
  '채',
  '척',
  '천',
  '초',
  '총',
  '최',
  '추',
  '쾌',
  '탁',
  '탄',
  '태',
  '판',
  '팽',
  '편',
  '평',
  '포',
  '표',
  '풍',
  '피',
  '필',
  '하',
  '학',
  '한',
  '함',
  '해',
  '허',
  '현',
  '형',
  '호',
  '홍',
  '화',
  '환',
  '황',
]
export function randomName() {
  return randomRange(firstNames) + randomRange(lastNames)
}