/**
 * Multi-language support for Baiyi Lian's portfolio
 * Supports: English (en), Chinese - 中文 (zh), Japanese - 日本語 (ja)
 */

(function($) {

  'use strict';

  var translations = {
    en: {
      'nav-home': 'HOME',
      'nav-projects': 'PROJECTS',
      'nav-contacts': 'CONTACTS',
      'intro-explore': 'Explore',
      'header-logo': 'BAIYI LIAN',
      'featured-heading': 'Hi — I\'m Baiyi',
      'featured-desc': 'I build reliable AI systems and love turning research ideas into practical tools. I work across full-stack ML: data, models, and deployment.',
      'featured-resume': 'Download Résumé',
      'project-caresoul': 'CareSoul',
      'project-caresoul-desc': 'An AI-powered wellbeing assistant focused on natural dialogue which implements an agentic RAG workflow to retrieve clinically-grounded relationship tips while utilizing a \'Safety-First\' pre-processing layer to intercept high-risk queries, ensuring all interactions remain within health-tech compliance boundaries.',
      'project-easytts': 'easy tts reader',
      'project-easytts-desc': 'A cross-platform Electron desktop application that converts PDF documents to speech using three TTS engines — local Kokoro-82M (54 voices, 9 languages), OpenAI TTS, and macOS System TTS. Features automatic language detection, speed control (0.5x-2.0x), audio export, and a batch CLI converter for processing multiple PDFs at once. Fully private — Kokoro runs 100% locally with no API keys or subscriptions required.',
      'project-snowflake': 'End to end snowflake pipeline with cd/ci',
      'project-snowflake-desc': 'This project demonstrates a complete data pipeline that ingests data into Snowflake, manages transformations using dbt (Data Build Tool), and implements automated CI/CD practices.',
      'project-teams-caption': 'Teams Caption translation extension',
      'project-teams-caption-desc': 'A Chrome/Edge browser extension that automatically captures live captions from Microsoft Teams meetings via DOM mutation observers and translates them bidirectionally between Chinese and English in real-time using Google Translate API. Features automatic language detection, a popup interface showing translation history with timestamps, and requires no configuration — just enable Teams live captions and it works.',
      'project-lilt': 'LILT',
      'project-lilt-desc': 'An AI-powered language learning application available on both web and mobile, serving over 70 Finnish learners. Integrates local LLMs for personalized text generation and TTS-powered AI chat across daily life scenarios. Includes evaluation metrics that analyze speech patterns — pronunciation, intonation, fluency — providing real-time feedback to help learners improve their spoken Finnish.',
      'project-calm': 'Calm',
      'project-calm-desc': 'A compassionate, evidence-based voice AI companion for managing stress, anxiety, fatigue, depression, self-esteem issues, and insomnia. Built with a Direct-to-Model WebSocket strategy that bypasses traditional back-end infrastructure to minimize latency. Features a reactive "Orb" interface using Tailwind CSS and Framer Motion for visual feedback during listening and speaking states.',
      'project-aichologist': 'Aichologist',
      'project-aichologist-desc': 'A full-stack AI psychologist chat application with over 80 paid subscriptions from Finnish users. Built with Python/FastAPI back-end and Flutter front-end, deployed on Hetzner Cloud with Docker across mobile and web platforms. Plans to integrate real-time voice via ElevenLabs STT/TTS API for natural voice-based interaction with the AI psychologist.',
      'project-abc-search': 'ABC_search',
      'project-abc-search-desc': 'A medical search engine developed as coursework in Building NLP Applications. Supports Boolean search, TF-IDF search, and semantic search with sBERT, retrieving medical text data from MedicalNewsToday. Built using Agile methodologies with collaborative Git workflow.',
      'see-details': 'see details',
      'footer-address': 'Address',
      'footer-address-value': 'Helsinki, Finland, 00100',
      'footer-email': 'Email',
      'footer-social': 'Social',
      'footer-copyright': 'Untitled',
      'lang-label': 'EN'
    },

    zh: {
      'nav-home': '首页',
      'nav-projects': '项目',
      'nav-contacts': '联系',
      'intro-explore': '探索',
      'header-logo': '连白一',
      'featured-heading': '你好，我是白一',
      'featured-desc': '我构建可靠的AI系统，热衷于将研究想法转化为实用工具。我覆盖全栈机器学习：数据、模型与部署。',
      'featured-resume': '下载简历',
      'project-caresoul': 'CareSoul',
      'project-caresoul-desc': '一个基于AI的心理健康助手，专注于自然对话。它实现了智能RAG工作流，检索临床依据的关系建议，同时使用"安全优先"预处理层拦截高风险查询，确保所有交互都在健康科技合规范围内。',
      'project-easytts': 'easy tts reader',
      'project-easytts-desc': '一个跨平台Electron桌面应用，可将PDF文档转换为语音，使用三种TTS引擎 — 本地Kokoro-82M（54种声音，9种语言）、OpenAI TTS和macOS系统TTS。具备自动语言检测、速度控制（0.5x-2.0x）、音频导出以及批量CLI转换功能。完全私密 — Kokoro 100%本地运行，无需API密钥或订阅。',
      'project-snowflake': '端到端Snowflake数据管道（含CI/CD）',
      'project-snowflake-desc': '该项目展示了一个完整的数据管道，将数据导入Snowflake，使用dbt管理数据转换，并实现自动化的CI/CD实践。',
      'project-teams-caption': 'Teams字幕翻译扩展',
      'project-teams-caption-desc': '一个Chrome/Edge浏览器扩展，通过DOM突变观察器自动捕获Microsoft Teams会议的实时字幕，并使用Google Translate API在中文和英文之间进行双向实时翻译。具备自动语言检测、显示带时间戳翻译历史的弹出界面，无需任何配置即可使用。',
      'project-lilt': 'LILT',
      'project-lilt-desc': '一款支持网页和移动端的AI语言学习应用，服务超过70名芬兰语学习者。集成本地LLM进行个性化文本生成和TTS驱动的AI对话，覆盖日常生活场景。包含评估指标——分析发音、语调、流利度——提供实时反馈，帮助学习者提高口语芬兰语水平。',
      'project-calm': 'Calm',
      'project-calm-desc': '一个富有同理心、基于实证的语音AI伴侣，用于管理压力、焦虑、疲劳、抑郁、自尊问题和失眠。采用Direct-to-Model WebSocket策略，绕过传统后端基础设施以减少延迟。使用Tailwind CSS和Framer Motion构建响应式"光球"界面，在听和说状态提供视觉反馈。',
      'project-aichologist': 'Aichologist',
      'project-aichologist-desc': '一个全栈AI心理咨询聊天应用，拥有超过80名芬兰用户付费订阅。采用Python/FastAPI后端和Flutter前端，通过Docker部署在Hetzner云上，支持移动和网页平台。计划通过ElevenLabs STT/TTS API集成实时语音，实现与AI心理咨询师的自然语音交互。',
      'project-abc-search': 'ABC_search',
      'project-abc-search-desc': '一个医学搜索引擎，作为NLP应用构建课程项目开发。支持布尔搜索、TF-IDF搜索和基于sBERT的语义搜索，从MedicalNewsToday检索医学文本数据。采用敏捷方法和协作Git工作流构建。',
      'see-details': '查看详情',
      'footer-address': '地址',
      'footer-address-value': '芬兰赫尔辛基，00100',
      'footer-email': '邮箱',
      'footer-social': '社交媒体',
      'footer-copyright': '无标题',
      'lang-label': '中文'
    },

    ja: {
      'nav-home': 'ホーム',
      'nav-projects': 'プロジェクト',
      'nav-contacts': 'お問い合わせ',
      'intro-explore': '探索',
      'header-logo': 'Baiyi Lian',
      'featured-heading': 'こんにちは、白一です',
      'featured-desc': '信頼性の高いAIシステムを構築し、研究アイデアを実用的なツールに変えることを愛しています。データ、モデル、デプロイメントにわたるフルスタックMLに取り組んでいます。',
      'featured-resume': '履歴書をダウンロード',
      'project-caresoul': 'CareSoul',
      'project-caresoul-desc': '自然な対話に焦点を当てたAI搭載ウェルビーイングアシスタント。エージェンティックRAGワークフローを実装し、臨床的に裏付けられた人間関係のアドバイスを取得。\'安全第一\'の前処理層で高リスククエリを遮断し、すべての対話がヘルステックコンプライアンス範囲内に留まるようにします。',
      'project-easytts': 'easy tts reader',
      'project-easytts-desc': 'PDF文書を音声に変換するクロスプラットフォームElectronデスクトップアプリ。3つのTTSエンジン（ローカルKokoro-82M（54声、9言語）、OpenAI TTS、macOSシステムTTS）を使用。自動言語検出、速度制御（0.5x-2.0x）、音声エクスポート、複数PDFを一括処理するCLIコンバーターを搭載。完全プライベート — Kokoroは100％ローカルで動作し、APIキーやサブスクリプションは不要。',
      'project-snowflake': 'Snowflakeエンドツーエンドパイプライン（CI/CD対応）',
      'project-snowflake-desc': 'データをSnowflakeに取り込み、dbtを使用して変換を管理し、自動化されたCI/CDプラクティスを実装する完全なデータパイプラインを紹介するプロジェクト。',
      'project-teams-caption': 'Teams字幕翻訳拡張機能',
      'project-teams-caption-desc': 'DOMミューテーションオブザーバーを介してMicrosoft Teams会議のライブキャプションを自動的にキャプチャし、Google翻訳APIを使用して中国語と英語の間でリアルタイムに双方向翻訳するChrome/Edgeブラウザ拡張機能。自動言語検出、タイムスタンプ付き翻訳履歴を表示するポップアップインターフェースを備え、設定不要で動作します。',
      'project-lilt': 'LILT',
      'project-lilt-desc': 'ウェブとモバイルの両方で利用可能なAI搭載言語学習アプリケーション。70名以上のフィンランド語学習者にサービスを提供。ローカルLLMによるパーソナライズされた文章生成と、日常生活シナリオに対応したTTSベースのAIチャットを統合。発音、イントネーション、流暢さを分析する評価指標を備え、学習者のスピーキングスキル向上にリアルタイムフィードバックを提供します。',
      'project-calm': 'Calm',
      'project-calm-desc': 'ストレス、不安、疲労、うつ病、自尊心の問題、不眠症を管理するための、思いやりのあるエビデンスベースの音声AIコンパニオン。従来のバックエンドインフラをバイパスするDirect-to-Model WebSocket戦略で構築され、レイテンシーを最小限に抑えます。Tailwind CSSとFramer Motionを使用した反応型「オーブ」インターフェースを備え、リスニング状態と発話状態で視覚的フィードバックを提供します。',
      'project-aichologist': 'Aichologist',
      'project-aichologist-desc': '80以上のフィンランド人ユーザーからの有料サブスクリプションを持つフルスタックAI心理学者チャットアプリケーション。Python/FastAPIバックエンドとFlutterフロントエンドで構築され、Hetzner CloudにDockerでデプロイ。モバイルとウェブプラットフォームの両方をサポート。ElevenLabs STT/TTS APIを介したリアルタイム音声統合を計画中。',
      'project-abc-search': 'ABC_search',
      'project-abc-search-desc': 'NLPアプリケーション構築のコースワークとして開発された医療用検索エンジン。ブール検索、TF-IDF検索、sBERTによるセマンティック検索をサポートし、MedicalNewsTodayから医療テキストデータを取得。アジャイル手法と協調的Gitワークフローで構築。',
      'see-details': '詳細を見る',
      'footer-address': '住所',
      'footer-address-value': 'フィンランド ヘルシンキ 00100',
      'footer-email': 'メール',
      'footer-social': 'ソーシャル',
      'footer-copyright': '無題',
      'lang-label': '日本語'
    }
  };

  // ============================================================
  // Language management
  // ============================================================

  var currentLang = localStorage.getItem('site-lang') || 'en';

  function switchLang(lang) {
    if (!translations[lang]) {
      console.warn('[lang.js] Unknown language:', lang);
      return;
    }

    currentLang = lang;
    localStorage.setItem('site-lang', lang);

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var key = el.getAttribute('data-i18n');
      var text = translations[lang][key];
      if (text !== undefined) {
        el.textContent = text;
      }
    });

    // Update toggle button text
    var toggle = document.getElementById('lang-toggle');
    if (toggle) {
      toggle.textContent = translations[lang]['lang-label'] || lang.toUpperCase();
    }

    // Update dropdown active state
    document.querySelectorAll('#lang-menu a').forEach(function(btn) {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Update page lang attribute
    document.documentElement.lang = lang === 'en' ? 'en' : (lang === 'zh' ? 'zh-CN' : 'ja');

    // Close the dropdown
    document.getElementById('lang-selector').classList.remove('open');

    console.log('[lang.js] Switched to:', lang);
  }

  // ============================================================
  // Dropdown toggle
  // ============================================================

  function toggleDropdown(e) {
    e.preventDefault();
    var sel = document.getElementById('lang-selector');
    sel.classList.toggle('open');
  }

  // Close dropdown when clicking outside
  function closeOnOutsideClick(e) {
    var sel = document.getElementById('lang-selector');
    if (!sel.contains(e.target)) {
      sel.classList.remove('open');
    }
  }

  // ============================================================
  // Scroll-based alt class (matching navPanelToggle behavior)
  // ============================================================

  function updateToggleStyle() {
    var toggle = document.getElementById('lang-toggle');
    var header = document.getElementById('header');
    if (!toggle || !header) return;

    var headerBottom = header.offsetTop + header.offsetHeight;
    var scrollY = window.scrollY || window.pageYOffset;

    // When scrolled past header bottom minus 5vh (~ the scrollex threshold)
    var threshold = Math.max(headerBottom - window.innerHeight * 0.05, 0);

    if (scrollY > threshold) {
      toggle.classList.add('alt');
    } else {
      toggle.classList.remove('alt');
    }
  }

  // ============================================================
  // ZIP download
  // ============================================================

  function downloadResumeZip() {
    var files = [
      { name: 'Baiyi_Lian_EN.pdf', path: 'Baiyi_Lian_EN.pdf' },
      { name: 'Baiyi_Lian_CN.pdf', path: 'Baiyi_Lian_CN.pdf' },
      { name: 'Baiyi_Lian_JP.pdf', path: 'Baiyi_Lian_JP.pdf' }
    ];

    // Load JSZip dynamically via script tag to avoid eval/CSP issues
    if (window.JSZip) {
      doDownload(window.JSZip);
      return;
    }

    var script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js';
    script.onload = function() {
      doDownload(window.JSZip);
    };
    script.onerror = function() {
      console.error('[lang.js] Failed to load JSZip');
      window.open(files[0].path, '_blank');
    };
    document.head.appendChild(script);

    function doDownload(JSZip) {
      if (!JSZip) {
        window.open(files[0].path, '_blank');
        return;
      }
      var zip = new JSZip();
      var fetches = [];

      files.forEach(function(f) {
        fetches.push(
          fetch(f.path)
            .then(function(r) {
              if (!r.ok) throw new Error('Failed to fetch ' + f.path);
              return r.arrayBuffer();
            })
            .then(function(buf) {
              zip.file(f.name, buf);
            })
        );
      });

      Promise.all(fetches)
        .then(function() {
          return zip.generateAsync({ type: 'blob' });
        })
        .then(function(blob) {
          var link = document.createElement('a');
          link.href = URL.createObjectURL(blob);
          link.download = 'Baiyi_Lian_CV.zip';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          setTimeout(function() { URL.revokeObjectURL(link.href); }, 5000);
        })
        .catch(function(err) {
          console.error('[lang.js] ZIP download failed:', err);
          window.open(files[0].path, '_blank');
        });
    }
  }

  // ============================================================
  // Initialize on DOM ready
  // ============================================================

  $(function() {

    // Set initial language
    switchLang(currentLang);

    // Dropdown toggle click
    $('#lang-toggle').on('click', function(e) {
      e.preventDefault();
      toggleDropdown(e);
    });

    // Language option click in dropdown
    $('#lang-menu').on('click', 'a', function(e) {
      e.preventDefault();
      var lang = $(this).data('lang');
      if (lang && lang !== currentLang) {
        switchLang(lang);
      } else {
        // Close dropdown even if same language clicked
        document.getElementById('lang-selector').classList.remove('open');
      }
    });

    // Close dropdown on outside click
    $(document).on('click', function(e) {
      var $sel = $('#lang-selector');
      if ($sel.hasClass('open') && !$(e.target).closest('#lang-selector').length) {
        $sel.removeClass('open');
      }
    });

    // Scroll handler for alt class
    $(window).on('scroll resize', function() {
      updateToggleStyle();
    });

    // Initial check
    updateToggleStyle();

    // Download resume button
    $(document).on('click', '#download-resume', function(e) {
      e.preventDefault();
      downloadResumeZip();
    });
  });

})(jQuery);
