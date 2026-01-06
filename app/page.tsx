import Button from '@/components/Button';
import VideoCard from '@/components/VideoCard';
import StatCard from '@/components/StatCard';
import FAQAccordion from '@/components/FAQAccordion';
import NewsletterForm from '@/components/NewsletterForm';
import ScheduleCard from '@/components/ScheduleCard';
import TechBadge from '@/components/TechBadge';

const faqItems = [
  {
    question: "코딩을 처음 시작하는데 어떤 언어부터 배워야 하나요?",
    answer: "웹 개발에 관심이 있다면 HTML, CSS, JavaScript를 추천드립니다. 프로그래밍 기초를 탄탄히 하고 싶다면 Python도 좋은 선택입니다. 저희 채널에서 각 언어의 입문 강의를 확인해보세요!"
  },
  {
    question: "영상에서 사용하는 개발 환경은 무엇인가요?",
    answer: "주로 VS Code를 사용하고 있습니다. 테마는 One Dark Pro, 폰트는 Fira Code를 사용해요. 상세한 개발 환경 셋업 영상도 채널에서 확인하실 수 있습니다."
  },
  {
    question: "질문이 있으면 어디에 남기면 되나요?",
    answer: "영상 댓글이나 커뮤니티 탭에 질문을 남겨주시면 최대한 답변드리고 있습니다. 자주 묻는 질문은 별도 영상으로 다루기도 해요!"
  },
  {
    question: "협업 및 비즈니스 문의는 어떻게 하나요?",
    answer: "채널 정보의 비즈니스 문의 이메일로 연락 주시면 됩니다. 강의, 세미나, 기술 컨설팅 등 다양한 협업을 환영합니다."
  }
];

const scheduleItems = [
  {
    day: "월요일",
    time: "오후 6시",
    content: "웹 개발 기초 시리즈",
    icon: "📚"
  },
  {
    day: "수요일",
    time: "오후 7시",
    content: "알고리즘 문제 풀이",
    icon: "🧩"
  },
  {
    day: "금요일",
    time: "오후 6시",
    content: "최신 프레임워크 튜토리얼",
    icon: "🚀"
  },
  {
    day: "토요일",
    time: "오후 2시",
    content: "라이브 코딩 & Q&A",
    icon: "🎬"
  }
];

const techItems = [
  { name: "React", color: "bg-cyan-500", icon: "⚛️" },
  { name: "Next.js", color: "bg-gray-800", icon: "▲" },
  { name: "TypeScript", color: "bg-blue-600", icon: "📘" },
  { name: "Node.js", color: "bg-green-600", icon: "🟢" },
  { name: "Python", color: "bg-yellow-500", icon: "🐍" },
  { name: "Tailwind", color: "bg-teal-500", icon: "🎨" },
  { name: "Docker", color: "bg-blue-500", icon: "🐳" },
  { name: "AWS", color: "bg-orange-500", icon: "☁️" }
];

const HomePage = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-white flex items-center justify-center text-6xl shadow-2xl">
              👨‍💻
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            CodeMaster
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            코딩의 즐거움을 전파하는 개발자
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="#videos" className="text-lg px-8 py-3">
              인기 영상 보기
            </Button>
            <Button
              href="https://youtube.com"
              variant="secondary"
              className="text-lg px-8 py-3"
            >
              구독하기
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            채널 소개
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg mb-4 leading-relaxed">
                안녕하세요! CodeMaster입니다. 💙
              </p>
              <p className="text-lg mb-4 leading-relaxed">
                저는 초보자부터 전문가까지 모두가 즐길 수 있는 코딩 콘텐츠를 만듭니다.
                웹 개발, 알고리즘, 최신 프레임워크까지 다양한 주제를 다루고 있어요.
              </p>
              <p className="text-lg leading-relaxed">
                함께 성장하는 개발자 커뮤니티를 만들어가고 싶습니다!
              </p>
            </div>
            <div className="text-6xl text-center">
              🚀
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            다루는 기술 스택
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
            채널에서 배울 수 있는 다양한 기술들
          </p>
          <TechBadge items={techItems} />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            채널 통계
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard
              icon="👥"
              value="50만+"
              label="구독자"
            />
            <StatCard
              icon="📺"
              value="500+"
              label="업로드 영상"
            />
            <StatCard
              icon="👁️"
              value="1억+"
              label="총 조회수"
            />
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            업로드 스케줄
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
            매주 정해진 시간에 새로운 콘텐츠가 업로드됩니다
          </p>
          <ScheduleCard items={scheduleItems} />
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            인기 영상
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <VideoCard
              title="Next.js 14 완벽 가이드 - 처음부터 배포까지"
              thumbnail="https://via.placeholder.com/400x225/3b82f6/ffffff?text=Next.js+14"
              views="120만"
              duration="45:30"
              link="https://youtube.com"
            />
            <VideoCard
              title="TypeScript로 타입 안전한 코드 작성하기"
              thumbnail="https://via.placeholder.com/400x225/8b5cf6/ffffff?text=TypeScript"
              views="85만"
              duration="32:15"
              link="https://youtube.com"
            />
            <VideoCard
              title="Tailwind CSS 실전 활용법 총정리"
              thumbnail="https://via.placeholder.com/400x225/ec4899/ffffff?text=Tailwind+CSS"
              views="95만"
              duration="28:45"
              link="https://youtube.com"
            />
            <VideoCard
              title="React 성능 최적화 완벽 가이드"
              thumbnail="https://via.placeholder.com/400x225/06b6d4/ffffff?text=React+Optimization"
              views="110만"
              duration="38:20"
              link="https://youtube.com"
            />
            <VideoCard
              title="알고리즘 문제 해결 전략 10가지"
              thumbnail="https://via.placeholder.com/400x225/10b981/ffffff?text=Algorithm"
              views="75만"
              duration="52:10"
              link="https://youtube.com"
            />
            <VideoCard
              title="개발자 취업 포트폴리오 만들기"
              thumbnail="https://via.placeholder.com/400x225/f59e0b/ffffff?text=Portfolio"
              views="130만"
              duration="41:05"
              link="https://youtube.com"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">
            자주 묻는 질문
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
            궁금한 점이 있으시면 확인해보세요
          </p>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <NewsletterForm />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            함께 성장하는 개발자가 되어요!
          </h2>
          <p className="text-xl mb-8 opacity-90">
            매주 새로운 코딩 콘텐츠가 업로드됩니다.
            구독하고 알림 설정하면 놓치지 않아요!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="https://youtube.com"
              className="text-lg px-8 py-3 bg-red-600 hover:bg-red-700"
            >
              🔔 유튜브 구독하기
            </Button>
            <Button
              href="https://github.com"
              variant="secondary"
              className="text-lg px-8 py-3"
            >
              💻 GitHub 팔로우
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-2">© 2024 CodeMaster. All rights reserved.</p>
          <p className="text-sm">Made with ❤️ for developers</p>
        </div>
      </footer>
    </main>
  );
};

export default HomePage;
