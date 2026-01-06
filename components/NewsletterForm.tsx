'use client';

import { useState } from 'react';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.includes('@')) {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    } else {
      setStatus('error');
    }
  };

  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12">
      <div className="max-w-2xl mx-auto text-center">
        <div className="text-4xl mb-4">📬</div>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
          새 영상 알림 받기
        </h3>
        <p className="text-indigo-100 mb-6">
          새로운 강의와 코딩 팁을 이메일로 받아보세요. 스팸 없이 유용한 정보만 보내드립니다.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md shadow-md transition-colors duration-200 whitespace-nowrap"
          >
            구독하기
          </button>
        </form>
        {status === 'success' && (
          <p className="mt-4 text-green-300 font-medium">
            ✅ 구독이 완료되었습니다!
          </p>
        )}
        {status === 'error' && (
          <p className="mt-4 text-red-300 font-medium">
            ❌ 올바른 이메일 주소를 입력해주세요.
          </p>
        )}
      </div>
    </div>
  );
};

export default NewsletterForm;
