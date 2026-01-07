import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, Brain, Share2, ArrowRight } from 'lucide-react';

const labs = [
  {
    icon: <Brain size={32} />,
    title: "Neuro-Marketing Lab",
    desc: "뇌과학 기반의 소비자 행동 분석 및 광고 효율 측정 연구",
    tags: ["#Neuroscience", "#DataAnalysis", "#EyeTracking"]
  },
  {
    icon: <Share2 size={32} />,
    title: "AI Copywriting Lab",
    desc: "생성형 AI를 활용한 광고 카피라이팅 자동화 및 최적화 시스템 개발",
    tags: ["#LLM", "#NLP", "#GenerativeAI"]
  },
  {
    icon: <Microscope size={32} />,
    title: "Future Ad-Tech Lab",
    desc: "블록체인, 메타버스 등 차세대 플랫폼 광고 기술 표준화 연구",
    tags: ["#Metaverse", "#Blockchain", "#Web3"]
  }
];

const ResearchSection = () => {
  return (
    <section id="research" className="section bg-darker">
      <div className="container">
        <div className="section-header-center">
          <span className="section-subtitle-center">Research & Development</span>
          <h2 className="section-title">Labs</h2>
          <p className="section-desc">
            광고 산업의 혁신을 이끄는 실용적인 연구 커뮤니티. <br />
            현업 전문가들과 함께 깊이 있는 인사이트를 발견하세요.
          </p>
        </div>

        <div className="grid-3">
          {labs.map((lab, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="lab-card"
            >
              <div className="lab-icon-wrapper">
                {lab.icon}
              </div>
              
              <h3 className="card-title">{lab.title}</h3>
              <p className="card-desc mb-6">
                {lab.desc}
              </p>

              <div className="tags-wrapper">
                {lab.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="tag-mono">
                    {tag}
                  </span>
                ))}
              </div>

              <button className="btn-outline-full">
                연구 참여하기 <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
