import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const programs = [
  {
    category: "Creative",
    title: "Digital Creative Master",
    desc: "디지털 환경에 최적화된 크리에이티브 전략과 디자인 시스템 구축",
    status: "모집중",
    isPrimary: true
  },
  {
    category: "Data & Tech",
    title: "Ad-Tech Engineer Course",
    desc: "프로그래매틱 광고 생태계와 데이터 분석 엔지니어링 실무",
    status: "사전알림",
    isPrimary: false
  },
  {
    category: "Marketing",
    title: "Performance Growth Hack",
    desc: "데이터 기반의 성과 최적화와 그로스 해킹 전략 수립",
    status: "모집중",
    isPrimary: true
  }
];

const EducationSection = () => {
  return (
    <section id="education" className="section bg-dark">
      <div className="container">
        <div className="section-header">
          <div>
            <span className="section-subtitle">Premium Education</span>
            <h2 className="section-title">Advertising Camps</h2>
          </div>
          <a href="#" className="view-all-link">
            View All Programs <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="grid-3">
          {programs.map((program, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="card program-card"
            >
              <div className="card-header">
                <span className="tag">{program.category}</span>
                <span className={`status ${program.isPrimary ? 'status-active' : 'status-inactive'}`}>
                  {program.status}
                </span>
              </div>
              
              <h3 className="card-title">
                {program.title}
              </h3>
              <p className="card-desc">
                {program.desc}
              </p>

              <div className="card-footer">
                Learn More <ArrowUpRight size={16} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
