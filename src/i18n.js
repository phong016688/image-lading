export const SUPPORTED_LANGUAGES = [
  { code: 'vi', label: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'ja', label: '日本語', flag: '🇯🇵' },
  { code: 'ko', label: '한국어', flag: '🇰🇷' },
  { code: 'zh', label: '中文', flag: '🇨🇳' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'pt', label: 'Português', flag: '🇧🇷' },
  { code: 'it', label: 'Italiano', flag: '🇮🇹' },
];

export function detectUserLanguage() {
  try {
    const saved = localStorage.getItem('app_user_lang');
    if (saved && SUPPORTED_LANGUAGES.some((l) => l.code === saved)) {
      return saved;
    }
    const browserLangs = navigator.languages || [navigator.language || 'en'];
    for (const langStr of browserLangs) {
      const code = langStr.toLowerCase().split('-')[0];
      if (SUPPORTED_LANGUAGES.some((l) => l.code === code)) {
        return code;
      }
    }
  } catch (e) {
    console.warn('Could not detect language automatically', e);
  }
  return 'en';
}

export const translations = {
  en: {
    nav: {
      features: "Features",
      howItWorks: "How It Works",
      useCases: "Use Cases",
      faq: "FAQ",
      download: "Get App",
    },
    hero: {
      badge: "Release 1.0 • Smart Photo Cleaner",
      title: "Clean Your Photo Library. Keep It Private.",
      subtitle: "Review duplicate photos, similar shots, screenshots, and large videos on your phone. 100% local-first privacy with full user control.",
      downloadApp: "Download Free App",
      exploreFeatures: "Explore Features",
      localFirst: "100% Local-first",
      localFirstSub: "On-device processing",
      reviewFirst: "Review First",
      reviewFirstSub: "No blind deletions",
      secretSpace: "Secret Space",
      secretSpaceSub: "Encrypted private vault",
      scanQr: "Scan QR code to download on mobile"
    },
    socialProof: {
      rating: "4.8/5.0 Rating",
      storage: "500,000+ GB Storage Freed",
      privacy: "100% On-Device Local Privacy",
      headline: "Trusted by thousands of iPhone & Android users to clear phone storage safely"
    },
    problem: {
      tagline: "Daily Storage Headaches",
      title: "Is Your Phone Storage Constantly Full?",
      items: [
        {
          title: "Thousands of Duplicate Photos",
          desc: "Burst mode and rapid shooting leave hundreds of identical photos taking up gigabytes."
        },
        {
          title: "Fear of Accidental Deletion",
          desc: "Automated cleaners often delete important memories because you can't preview them properly."
        },
        {
          title: "Exposed Private Photos",
          desc: "Personal documents, family photos, and sensitive images exposed in the main camera roll."
        }
      ]
    },
    solution: {
      tagline: "PhotoClean Solution",
      title: "Smart Local Cleanup with Total User Control",
      description: "PhotoClean AI analyzes photo features on-device. It groups similar shots so you can pick the best shot and safely remove unwanted extras.",
      points: [
        "On-device AI scanning guarantees your photos never leave your phone.",
        "Clear preview and selection before any deletion takes place.",
        "Encrypted Secret Space protects sensitive photos behind passcode or biometrics."
      ]
    },
    features: {
      tagline: "Core Capabilities",
      title: "Everything You Need to Reclaim Phone Storage",
      subtitle: "Clean photo rascals, organize memories, and secure private files.",
      list: [
        {
          title: "Duplicate Photo Review",
          desc: "Groups exact duplicate photos so you can delete extras in one tap."
        },
        {
          title: "Similar Photo Picker",
          desc: "Identifies similar burst shots and recommends the sharpest, best-lit photo to keep."
        },
        {
          title: "Large Video Cleaner",
          desc: "Sorts videos by file size to quickly locate and review heavy 4K videos."
        },
        {
          title: "Encrypted Secret Space",
          desc: "Hide private photos and videos inside a password-protected local vault."
        },
        {
          title: "100% Local Processing",
          desc: "All image analysis runs locally on your phone's Neural Engine without cloud uploads."
        },
        {
          title: "Safe Trash Recovery",
          desc: "Deleted items go to your system Recently Deleted folder for easy 30-day recovery."
        }
      ]
    },
    howItWorks: {
      tagline: "3 Easy Steps",
      title: "Clean Up Storage in Minutes",
      steps: [
        {
          number: "01",
          title: "Scan Your Library",
          desc: "Grant access to photos. PhotoClean AI scans your library locally."
        },
        {
          number: "02",
          title: "Review Suggestions",
          desc: "Inspect grouped duplicates, similar shots, and large video files."
        },
        {
          number: "03",
          title: "Confirm & Free Storage",
          desc: "Tap clean to safely remove selected items and reclaim gigabytes."
        }
      ]
    },
    useCases: {
      tagline: "Use Cases",
      title: "Built for Everyone Who Takes Photos",
      items: [
        {
          role: "Travelers & Photographers",
          scenario: "Quickly clear out hundreds of burst shots and blurry photos after a vacation."
        },
        {
          role: "Low Storage Phone Owners",
          scenario: "Free up 10GB+ storage without buying expensive cloud subscriptions."
        },
        {
          role: "Privacy Conscious Users",
          scenario: "Store confidential documents and personal photos securely in Secret Space."
        }
      ]
    },
    reviews: {
      tagline: "Real User Reviews",
      title: "Loved by Millions of Photo Takers",
      list: [
        {
          name: "Alex R.",
          role: "iPhone 15 User",
          comment: "PhotoClean AI freed up 18GB of space on my phone in 5 minutes! I could double-check every photo before deleting.",
          rating: 5
        },
        {
          name: "Hoang Nam",
          role: "Android User",
          comment: "Secret Space vault is awesome for hiding personal documents. Totally local and private.",
          rating: 5
        },
        {
          name: "Sarah Miller",
          role: "Content Creator",
          comment: "Finding duplicate photos after photoshoots used to take hours. This app groups them automatically!",
          rating: 5
        }
      ]
    },
    faq: {
      tagline: "Catchy & High-Traffic FAQ",
      title: "Questions You Might Be Wondering About",
      items: [
        {
          q: "Are you frustrated because your phone constantly pops up 'Storage Almost Full' right when recording a video?",
          a: "You're not alone! Over 75% of smartphone users run out of storage due to hidden duplicate photos and uncompressed 4K video clips. PhotoClean AI frees up 10GB+ in under 3 minutes."
        },
        {
          q: "Is your phone lagging and overheating because of thousands of junk photos & screenshots?",
          a: "Yes! High photo counts clutter your device index. PhotoClean AI scans your camera roll locally to locate useless duplicate shots and heavy junk files safely."
        },
        {
          q: "Should you waste money paying $3–$10 every single month for extra cloud storage?",
          a: "No! Before subscribing to monthly cloud plans, PhotoClean AI helps you clean out duplicate rascals so your existing phone storage lasts much longer for free."
        },
        {
          q: "What can AI Photo Cleaner do that prevents ACCIDENTAL DELETION of precious memories?",
          a: "Unlike dumb automatic cleaners that blindly delete files, PhotoClean AI groups similar burst shots, highlights the sharpest photo, and requires your explicit preview tap before anything is moved to trash."
        },
        {
          q: "Are your personal ID photos, bank documents, and private photos safe from hackers?",
          a: "100% safe. PhotoClean AI operates 100% local-first on your phone's processor. Zero photos are ever uploaded to any external server. Plus, Secret Space encrypts private files behind a PIN."
        },
        {
          q: "What if you accidentally tap delete on an important picture?",
          a: "No panic! Deleted items go straight to your phone's native Recently Deleted album, allowing easy 30-day one-tap recovery."
        },
        {
          q: "Is PhotoClean AI free to use?",
          a: "Yes! Core duplicate scanning, similar photo grouping, and basic cleanup are 100% free."
        },
        {
          q: "Does it support both iPhone and Android?",
          a: "Yes, fully optimized for both iOS (iPhone/iPad) and Android devices."
        },
        {
          q: "Do I need an active Internet connection to clean my phone?",
          a: "No! PhotoClean AI works 100% offline without needing Wi-Fi or cellular data."
        },
        {
          q: "How can I contact customer support if I need assistance?",
          a: "Reach out anytime to our team at personpick11@gmail.com for fast support."
        }
      ]
    },
    finalCta: {
      title: "Ready to Reclaim Your Phone Storage?",
      subtitle: "Download PhotoClean AI now and clean your photo library safely.",
      scanToDownload: "Scan QR code to download on mobile"
    },
    footer: {
      desc: "Smart, local-first photo cleaner and private vault for iOS and Android.",
      support: "Support",
      contact: "Contact Support",
      privacy: "Privacy Policy",
      rights: "All rights reserved."
    }
  },
  vi: {
    nav: {
      features: "Tính năng",
      howItWorks: "Cách hoạt động",
      useCases: "Nhu cầu",
      faq: "Hỏi đáp",
      download: "Tải App",
    },
    hero: {
      badge: "Release 1.0 • App Dọn Dẹp Ảnh Thông Minh",
      title: "Dọn Sạch Thư Viện Ảnh. Bảo Mật Riêng Tư.",
      subtitle: "Xem lại ảnh trùng lặp, ảnh tương tự, ảnh màn hình và video nặng máy. Xử lý 100% nội bộ an toàn, kiểm soát trước khi xóa.",
      downloadApp: "Tải App Miễn Phí",
      exploreFeatures: "Khám Phá Tính Năng",
      localFirst: "100% Nội bộ",
      localFirstSub: "Xử lý trực tiếp trên máy",
      reviewFirst: "Xem trước an toàn",
      reviewFirstSub: "Không lo xóa nhầm",
      secretSpace: "Kho Bí Mật",
      secretSpaceSub: "Mã hóa bảo mật",
      scanQr: "Quét mã QR để tải về điện thoại"
    },
    socialProof: {
      rating: "Đánh giá 4.8/5.0",
      storage: "500.000+ GB Bộ Nhớ Đã Giải Phóng",
      privacy: "100% An Toàn Trên Thiết Bị",
      headline: "Được hàng trăm ngàn người dùng tin tưởng để dọn dẹp bộ nhớ an toàn"
    },
    problem: {
      tagline: "Vấn đề bộ nhớ",
      title: "Điện Thoại Của Bạn Luôn Trong Tình Trạng Đầy Dung Lượng?",
      items: [
        {
          title: "Hàng Ngàn Ảnh Trùng Lặp & Ảnh Nháp",
          desc: "Chụp liên tiếp tạo ra hàng trăm tấm ảnh giống hệt nhau làm đầy dung lượng bộ nhớ điện thoại."
        },
        {
          title: "Nỗi Sợ Xóa Nhầm Kỷ Niệm Quan Trọng",
          desc: "Các app dọn dẹp tự động hay xóa nhầm ảnh quan trọng vì bạn không thể xem lại cẩn thận trước khi xóa."
        },
        {
          title: "Ảnh Riêng Tư Rò Rỉ Ra Thư Viện",
          desc: "Giấy tờ cá nhân, ảnh gia đình nhạy cảm bị lộ ngay trong thư viện ảnh chính."
        }
      ]
    },
    solution: {
      tagline: "Giải pháp PhotoClean",
      title: "Dọn Dẹp Thông Minh - Người Dùng Làm Chủ",
      description: "PhotoClean AI phân tích đặc trưng ảnh trực tiếp trên thiết bị, nhóm các góc chụp tương tự để bạn chọn tấm đẹp nhất và xóa ảnh dư thừa.",
      points: [
        "Quét AI trực tiếp trên máy, ảnh không bao giờ tải lên bất kỳ máy chủ nào.",
        "Xem lại rõ ràng và tự tay xác nhận trước khi thực hiện xóa.",
        "Kho Bí Mật Secret Space bảo mật ảnh nhạy cảm bằng mật mã và sinh trắc học."
      ]
    },
    features: {
      tagline: "Tính năng cốt lõi",
      title: "Mọi Công Cụ Cần Thiết Để Giải Phóng Dung Lượng",
      subtitle: "Lọc ảnh rác, sắp xếp kỷ niệm và bảo vệ dữ liệu riêng tư.",
      list: [
        {
          title: "Lọc Ảnh Trùng Lặp Chuẩn Xác",
          desc: "Nhóm các tấm ảnh giống hệt nhau để xóa nhanh chỉ với 1 chạm."
        },
        {
          title: "Gợi Ý Ảnh Đẹp Nhất",
          desc: "Tự động nhận diện chuỗi ảnh chụp liên tiếp và gợi ý tấm sắc nét nhất."
        },
        {
          title: "Dọn Video Dung Lượng Lớn",
          desc: "Sắp xếp video theo kích thước file để nhanh chóng lọc các video 4K nặng máy."
        },
        {
          title: "Kho Bí Mật Secret Space",
          desc: "Ẩn ảnh và video riêng tư vào kho mã hóa bảo mật nội bộ."
        },
        {
          title: "Xử Lý 100% Nội Bộ",
          desc: "Toàn bộ tiến trình phân tích chạy trên chip Neural Engine của điện thoại."
        },
        {
          title: "Khôi Phục An Toàn 30 Ngày",
          desc: "File xóa chuyển vào Thùng rác hệ thống, khôi phục lại dễ dàng trong 30 ngày."
        }
      ]
    },
    howItWorks: {
      tagline: "3 bước đơn giản",
      title: "Dọn Sạch Dung Lượng Trong Vài Phút",
      steps: [
        {
          number: "01",
          title: "Quét Thư Viện Ảnh",
          desc: "Cấp quyền truy cập ảnh. PhotoClean AI quét nội bộ thư viện của bạn."
        },
        {
          number: "02",
          title: "Xem Lại Gợi Ý",
          desc: "Kiểm tra danh sách nhóm ảnh trùng, ảnh tương tự và video nặng."
        },
        {
          number: "03",
          title: "Xác Nhận & Giải Phóng",
          desc: "Chạm dọn dẹp để xóa an toàn các mục đã chọn và thu hồi hàng GB dung lượng."
        }
      ]
    },
    useCases: {
      tagline: "Đối tượng sử dụng",
      title: "Thiết Kế Cho Tất Cả Ai Thường Xuyên Chụp Ảnh",
      items: [
        {
          role: "Người Du Lịch & Chụp Ảnh",
          scenario: "Dọn nhanh hàng trăm tấm ảnh chụp liên tiếp và ảnh mờ sau mỗi chuyến đi."
        },
        {
          role: "Người Dùng Điện Thoại Dung Lượng Thấp",
          scenario: "Giải phóng 10GB+ bộ nhớ mà không cần mua các gói đám mây đắt đỏ."
        },
        {
          role: "Người Mẫu & Người Cần Bảo Mật",
          scenario: "Lưu trữ giấy tờ cá nhân và ảnh riêng tư an toàn trong Kho Bí Mật."
        }
      ]
    },
    reviews: {
      tagline: "Đánh giá thực tế",
      title: "Được Yêu Thích Bởi Hàng Triệu Người Dùng",
      list: [
        {
          name: "Tuấn Anh",
          role: "Người dùng iPhone 15",
          comment: "PhotoClean AI giúp mình giải phóng 18GB bộ nhớ chỉ trong 5 phút! Rất an tâm vì được xem kỹ từng tấm trước khi xóa.",
          rating: 5
        },
        {
          name: "Hoàng Nam",
          role: "Người dùng Android",
          comment: "Kho Bí Mật cực kỳ tiện lợi để giấu ảnh giấy tờ. Mọi thứ xử lý ngay trên máy nên không lo rò rỉ.",
          rating: 5
        },
        {
          name: "Minh Thư",
          role: "Content Creator",
          comment: "Mỗi lần đi chụp mẫu về cả ngàn tấm ảnh giống nhau. App gom lại giúp mình chọn tấm đẹp nhất cực nhanh!",
          rating: 5
        }
      ]
    },
    faq: {
      tagline: "Hỏi đáp nổi bật",
      title: "Các Thắc Mắc Bạn Thường Gặp",
      items: [
        {
          q: "Bạn phát bực vì điện thoại liên tục báo 'Dung lượng sắp đầy' đúng lúc đang quay video quan trọng?",
          a: "Bạn không cô đơn! Hơn 75% người dùng hết dung lượng do ảnh trùng lặp ẩn và video 4K. PhotoClean AI giúp giải phóng 10GB+ chỉ trong 3 phút."
        },
        {
          q: "Điện thoại của bạn bị giật lag, nóng máy vì chứa hàng ngàn ảnh rác và ảnh chụp màn hình?",
          a: "Đúng vậy! Bộ sưu tập quá đầy khiến chỉ mục máy bị chậm. PhotoClean AI tự động quét và lọc ra ảnh rác an toàn."
        },
        {
          q: "Có nên tốn tiền trả 50k–200k mỗi tháng để mua thêm dung lượng đám mây không?",
          a: "Không cần thiết! Trước khi tốn tiền mua dung lượng, PhotoClean AI giúp bạn dọn sạch ảnh trùng để tận dụng tối đa bộ nhớ có sẵn."
        },
        {
          q: "PhotoClean AI làm gì để tránh XÓA NHẦM kỷ niệm quý giá của bạn?",
          a: "Khác với các app xóa tự động mù quáng, PhotoClean AI gom nhóm ảnh tương tự, gợi ý tấm nét nhất và bắt buộc bạn bấm xác nhận mới chuyển vào thùng rác."
        },
        {
          q: "Ảnh căn cước, tài khoản ngân hàng và ảnh riêng tư có bị rò rỉ ra ngoài không?",
          a: "An toàn 100%. PhotoClean AI chạy hoàn toàn offline trên chip điện thoại. Không có bức ảnh nào bị tải lên mạng."
        },
        {
          q: "Lỡ tay bấm xóa nhầm bức ảnh quan trọng thì phải làm sao?",
          a: "Đừng lo! Ảnh xóa được chuyển vào Thùng rác (Recently Deleted) của máy, cho phép khôi phục lại trong 30 ngày."
        },
        {
          q: "PhotoClean AI có miễn phí không?",
          a: "Có! Các tính năng quét ảnh trùng, gom nhóm và dọn dẹp cơ bản hoàn toàn miễn phí."
        },
        {
          q: "App hỗ trợ iPhone hay Android?",
          a: "Hỗ trợ tối ưu cho cả hệ điều hành iOS (iPhone/iPad) và Android."
        },
        {
          q: "Có cần mạng Internet để dọn dẹp điện thoại không?",
          a: "Không! App hoạt động 100% offline không cần Wifi hay 4G."
        },
        {
          q: "Liên hệ hỗ trợ khi cần giúp đỡ bằng cách nào?",
          a: "Hãy gửi email cho chúng tôi qua địa chỉ personpick11@gmail.com bất cứ lúc nào."
        }
      ]
    },
    finalCta: {
      title: "Sẵn Sàng Giải Phóng Bộ Nhớ Điện Thoại?",
      subtitle: "Tải ngay PhotoClean AI để dọn dẹp thư viện ảnh an toàn hôm nay.",
      scanToDownload: "Quét mã QR để tải về điện thoại"
    },
    footer: {
      desc: "Ứng dụng dọn dẹp ảnh thông minh và bảo mật riêng tư 100% trên thiết bị cho iOS và Android.",
      support: "Hỗ trợ",
      contact: "Liên hệ hỗ trợ",
      privacy: "Chính sách quyền riêng tư",
      rights: "Bản quyền đã được bảo hộ."
    }
  },
  ja: {
    nav: {
      features: "機能",
      howItWorks: "使い方",
      useCases: "活用シーン",
      faq: "よくある質問",
      download: "アプリを入手",
    },
    hero: {
      badge: "Release 1.0 • スマート写真クリーナー",
      title: "写真ライブラリをすっきり整理。プライバシーも安全。",
      subtitle: "重複写真、類似ショット、スクリーンショット、容量の大きい動画を整理。100%ローカル処理で完全なプライバシー保護。",
      downloadApp: "無料アプリをダウンロード",
      exploreFeatures: "機能を探索",
      localFirst: "100% ローカル処理",
      localFirstSub: "端末内で安全処理",
      reviewFirst: "事前確認で安心",
      reviewFirstSub: "誤削除の心配なし",
      secretSpace: "シークレットスペース",
      secretSpaceSub: "暗号化プライベート金庫",
      scanQr: "QRコードをスキャンして入手"
    },
    socialProof: {
      rating: "評価 4.8/5.0",
      storage: "500,000+ GB の容量を解放",
      privacy: "100% 端末内ローカル処理",
      headline: "何万人ものユーザーに信頼されているスマートストレージクリーナー"
    },
    problem: {
      tagline: "ストレージの悩み",
      title: "スマホの容量が常に不足していませんか？",
      items: [
        {
          title: "数千枚の重複・似た写真",
          desc: "バースト撮影や連写によって、同じような写真が何ギガバイトも占有。"
        },
        {
          title: "誤削除への不安",
          desc: "自動クリーナーだと大切な思い出まで勝手に消されてしまう不安。"
        },
        {
          title: "見られたくない写真の露出",
          desc: "身分証やプライベートな画像が通常のカメラロールにそのまま表示。"
        }
      ]
    },
    solution: {
      tagline: "PhotoCleanの解決策",
      title: "自分でコントロールできるスマートローカルクリーン",
      description: "PhotoClean AIはデバイス上で写真を分析。似たショットをグループ化し、最高の1枚を選んで不要な写真を削除できます。",
      points: [
        "オンデバイスAIスキャンにより写真が外部に送信されることはありません。",
        "削除前に必ずクリアなプレビューで手動確認。",
        "暗号化されたシークレットスペースで重要写真を保護。"
      ]
    },
    features: {
      tagline: "主な機能",
      title: "ストレージを取り戻すためのすべてのツール",
      subtitle: "写真の整理、思い出の保護、ファイルセキュリティ。",
      list: [
        {
          title: "重複写真の正確な抽出",
          desc: "全く同じ写真をグループ化し、ワンタップで一括削除。"
        },
        {
          title: "ベストショット提案",
          desc: "連写された写真から最も鮮明で映りの良い1枚を自動推奨。"
        },
        {
          title: "大容量動画クリーナー",
          desc: "ファイルサイズ順に並べ替え、重い4K動画を素早くクリーンアップ。"
        },
        {
          title: "暗号化シークレットスペース",
          desc: "パスワード保護されたローカル金庫に秘密の写真・動画を保存。"
        },
        {
          title: "100% ローカル処理",
          desc: "すべての解析は端末のNeural Engine上で実行されクラウド不使用。"
        },
        {
          title: "安心の30日ゴミ箱復元",
          desc: "削除した写真はOS標準のゴミ箱に移動するため30日以内なら復元可能。"
        }
      ]
    },
    howItWorks: {
      tagline: "簡単3ステップ",
      title: "数分でストレージをクリーンアップ",
      steps: [
        {
          number: "01",
          title: "ライブラリをスキャン",
          desc: "写真へのアクセスを許可。PhotoClean AIがローカルでスキャン。"
        },
        {
          number: "02",
          title: "提案を確認",
          desc: "グループ化された重複写真や重い動画をプレビュー確認。"
        },
        {
          number: "03",
          title: "確認して容量解放",
          desc: "クリーンをタップして安全に選択項目を削除しギガバイトを解放。"
        }
      ]
    },
    useCases: {
      tagline: "活用シーン",
      title: "写真を撮るすべての人に",
      items: [
        {
          role: "旅行者・写真好き",
          scenario: "旅行後の大量の連写写真やブレた写真をすばやく整理。"
        },
        {
          role: "容量不足に悩む方",
          scenario: "有料クラウドに頼らず10GB以上の空き容量を確保。"
        },
        {
          role: "プライバシー重視の方",
          scenario: "身分証明書や重要書類をシークレットスペースに安全保存。"
        }
      ]
    },
    reviews: {
      tagline: "ユーザーの声",
      title: "多くの写真愛好家に選ばれています",
      list: [
        {
          name: "Kenji M.",
          role: "iPhone 15 ユーザー",
          comment: "5分で18GBも容量が空きました！消す前に1枚ずつ確認できるので安心です。",
          rating: 5
        },
        {
          name: "Yuki S.",
          role: "Android ユーザー",
          comment: "シークレットスペースが本当に便利。個人文書を安全に隠せます。",
          rating: 5
        },
        {
          name: "Elena K.",
          role: "クリエイター",
          comment: "撮影後の似た写真を自動でグループ化してくれるので時間が大幅に節約できました！",
          rating: 5
        }
      ]
    },
    faq: {
      tagline: "よくある質問",
      title: "疑問にお答えします",
      items: [
        {
          q: "動画撮影時に『空き容量不足』の警告が出て困っていませんか？",
          a: "スマートフォンの容量不足の75%以上は隠れた重複写真と未圧縮動画が原因です。PhotoClean AIなら3分で10GB以上解放できます。"
        },
        {
          q: "写真が多すぎてスマホが重くなっていませんか？",
          a: "はい、不要なスクショや重複写真が端末のインデックスを圧迫します。本アプリで安全に整理しましょう。"
        },
        {
          q: "クラウドサービスに毎月課金する必要がありますか？",
          a: "いいえ！追加課金する前に、まず重複写真を整理することで無料のまま容量を長持ちさせられます。"
        },
        {
          q: "誤って大切な写真を消してしまう心配はありませんか？",
          a: "勝手に削除するアプリとは異なり、事前の確認プレビューが必須となっているため誤削除を防げます。"
        },
        {
          q: "個人情報やプライベート写真の漏洩心配はありませんか？",
          a: "100%安全です。すべての処理は端末内（オフライン）で完了し、外部に画像が送信されることは一切ありません。"
        },
        {
          q: "万が一間違えて消してしまった場合は？",
          a: "削除された写真は端末の『最近削除した項目』に移動するため30日以内であれば簡単に復元できます。"
        },
        {
          q: "アプリは無料で利用できますか？",
          a: "はい！基本的な重複スキャンやクリーンアップ機能は完全無料です。"
        },
        {
          q: "iPhoneとAndroidの両方に対応していますか？",
          a: "はい、iOSとAndroidの両方に最適化されています。"
        },
        {
          q: "インターネット接続は必要ですか？",
          a: "いいえ！Wi-Fiやデータ通信がない完全オフライン環境でも利用可能です。"
        },
        {
          q: "サポートに連絡する方法は？",
          a: "ご質問は personpick11@gmail.com までお気軽にお問い合わせください。"
        }
      ]
    },
    finalCta: {
      title: "スマホの容量を取り戻す準備はできましたか？",
      subtitle: "今すぐPhotoClean AIをダウンロードして安全にライブラリを整理しましょう。",
      scanToDownload: "QRコードをスキャンしてダウンロード"
    },
    footer: {
      desc: "iOS/Android対応のスマート＆プライベート写真クリーナー。",
      support: "サポート",
      contact: "お問い合わせ",
      privacy: "プライバシーポリシー",
      rights: "All rights reserved."
    }
  },
  ko: {
    nav: {
      features: "주요 기능",
      howItWorks: "이용 방법",
      useCases: "활용 사례",
      faq: "자주 묻는 질문",
      download: "앱 다운로드",
    },
    hero: {
      badge: "Release 1.0 • 스마트 사진 클리너",
      title: "사진 라이브러리를 깨끗하게. 개인정보는 안전하게.",
      subtitle: "중복 사진, 유사한 샷, 스크린샷, 용량이 큰 비디오를 정리하세요. 100% 기기 내 로컬 처리로 완전한 개인정보 보호.",
      downloadApp: "무료 앱 다운로드",
      exploreFeatures: "기능 둘러보기",
      localFirst: "100% 로컬 처리",
      localFirstSub: "기기 내 안전 분석",
      reviewFirst: "미리보기 후 삭제",
      reviewFirstSub: "실수 삭제 방지",
      secretSpace: "비밀 공간",
      secretSpaceSub: "암호화된 개인 금고",
      scanQr: "QR 코드로 모바일 다운로드"
    },
    socialProof: {
      rating: "평점 4.8/5.0",
      storage: "500,000+ GB 용량 확보 완료",
      privacy: "100% 온디바이스 로컬 보안",
      headline: "수십만 명의 사용자가 신뢰하는 스마트 저장공간 클리너"
    },
    problem: {
      tagline: "저장공간 고민",
      title: "스마트폰 용량이 상시 부족하신가요?",
      items: [
        {
          title: "수천 장의 중복 & 유사 사진",
          desc: "연사 촬영으로 생성된 똑같은 사진들이 기가바이트 단위의 용량을 차지합니다."
        },
        {
          title: "소중한 추억의 실수 삭제 우려",
          desc: "자동 정리 앱은 미처 확인하지 못한 중요한 사진까지 삭제할 위험이 있습니다."
        },
        {
          title: "노출된 개인 사진 보안 위험",
          desc: "신분증, 개인 문서, 민감한 사진들이 기본 갤러리에 그대로 노출되어 있습니다."
        }
      ]
    },
    solution: {
      tagline: "PhotoClean 솔루션",
      title: "사용자가 제어하는 스마트 로컬 클리닝",
      description: "PhotoClean AI는 사진을 기기 내에서 직접 분석합니다. 유사한 샷을 그룹화하여 최선의 사진을 선택하고 불필요한 사진을 안전하게 제거할 수 있습니다.",
      points: [
        "기기 내 AI 스캔으로 사진이 외부 서버로 유출되지 않습니다.",
        "삭제 전 명확한 미리보기 및 사용자 수동 확인 필수.",
        "암호화된 비밀 공간(Secret Space)으로 민감한 사진 보호."
      ]
    },
    features: {
      tagline: "핵심 기능",
      title: "저장공간 확보에 필요한 모든 기능",
      subtitle: "사진 정리, 추억 보관, 개인 파일 보안.",
      list: [
        {
          title: "정확한 중복 사진 추출",
          desc: "동일한 사진을 그룹화하여 원터치로 한 번에 삭제."
        },
        {
          title: "베스트 컷 추천",
          desc: "연속 촬영된 사진 중 가장 선명하고 잘 나온 1장을 자동 추천."
        },
        {
          title: "대용량 비디오 클리너",
          desc: "파일 크기순으로 정렬하여 용량이 큰 4K 비디오를 빠른 정리."
        },
        {
          title: "암호화 비밀 공간 Secret Space",
          desc: "비밀번호로 보호되는 로컬 금고에 사생활 사진·비디오 보관."
        },
        {
          title: "100% 온디바이스 로컬 처리",
          desc: "클라우드 업로드 없이 스마트폰 Neural Engine에서 로컬 분석."
        },
        {
          title: "안전한 30일 복구 지원",
          desc: "삭제된 항목은 휴지통으로 이동하여 30일 내 언제든 원복 가능."
        }
      ]
    },
    howItWorks: {
      tagline: "간단 3단계",
      title: "몇 분 만에 저장공간 클리어",
      steps: [
        {
          number: "01",
          title: "라이브러리 스캔",
          desc: "사진 접근 권한 허용. PhotoClean AI가 로컬에서 스캔."
        },
        {
          number: "02",
          title: "추천 항목 확인",
          desc: "그룹화된 중복 사진 및 용량이 큰 비디오 미리보기."
        },
        {
          number: "03",
          title: "확인 및 용량 확보",
          desc: "정리를 터치하여 선택 항목을 안전하게 삭제하고 용량 확보."
        }
      ]
    },
    useCases: {
      tagline: "활용 사례",
      title: "사진을 자주 찍는 모두를 위한 앱",
      items: [
        {
          role: "여행가 & 사진 마니아",
          scenario: "여행 후 쏟아지는 흔들린 사진과 연사 컷을 빠르게 정리."
        },
        {
          role: "저용량 폰 사용자",
          scenario: "유료 클라우드 결제 없이 10GB 이상의 공간 확보."
        },
        {
          role: "개인정보에 민감한 사용자",
          scenario: "중요 서류나 민감한 사진을 비밀 공간에 안전하게 보관."
        }
      ]
    },
    reviews: {
      tagline: "실제 사용자 후기",
      title: "수많은 사진 애호가들의 이유 있는 선택",
      list: [
        {
          name: "김민준",
          role: "iPhone 15 사용자",
          comment: "5분 만에 18GB 용량을 비웠습니다! 삭제 전 미리볼 수 있어서 정말 안심됩니다.",
          rating: 5
        },
        {
          name: "박지훈",
          role: "Android 사용자",
          comment: "비밀 공간 기능 덕분에 신분증 사진을 안심하고 숨겨둘 수 있어서 만족스럽습니다.",
          rating: 5
        },
        {
          name: "이수진",
          role: "콘텐츠 크리에이터",
          comment: "촬영 후 쏟아지는 비슷한 사진들을 자동으로 묶어줘서 작업 시간이 대폭 줄었습니다!",
          rating: 5
        }
      ]
    },
    faq: {
      tagline: "자주 묻는 질문",
      title: "궁금한 점을 확인하세요",
      items: [
        {
          q: "동영상 촬영 중 '저장공간 부족' 팝업 때문에 불편하셨나요?",
          a: "스마트폰 용량 부족 원인의 75% 이상은 숨겨진 중복 사진과 4K 비디오입니다. PhotoClean AI는 3분 만에 10GB+를 비워줍니다."
        },
        {
          q: "사진이 너무 많아서 스마트폰이 느려졌나요?",
          a: "네, 불필요한 스크린샷과 사진은 기기 인덱스를 느리게 합니다. 본 앱으로 안전하게 정리해 보세요."
        },
        {
          q: "매달 매달 클라우드 구독료를 내야 할까요?",
          a: "아닙니다! 클라우드에 돈을 쓰기 전에 중복 사진을 정리하면 기존 용량을 훨씬 오래 무료로 사용할 수 있습니다."
        },
        {
          q: "소중한 사진이 실수로 삭제될 염려는 없나요?",
          a: "무작정 삭제하는 앱과 달리 사용자의 최종 수동 승인을 거쳐서만 휴지통으로 이동되므로 안심할 수 있습니다."
        },
        {
          q: "개인 사진이나 중요 문서가 유출될 위험은 없나요?",
          a: "100% 안전합니다. 모든 분석은 기기 내부(오프라인)에서만 진행되며 서버로 사진이 전송되지 않습니다."
        },
        {
          q: "실수로 삭제한 사진은 복구할 수 있나요?",
          a: "삭제된 항목은 시스템 기본 휴지통으로 이동하므로 30일 이내에 원클릭으로 복구 가능합니다."
        },
        {
          q: "앱 사용료는 무료인가요?",
          a: "네! 기본 스캔 및 중복 정리 기능은 100% 무료입니다."
        },
        {
          q: "iPhone과 Android 모두 지원하나요?",
          a: "네, iOS 및 Android 기기 모두 최적화되어 지원됩니다."
        },
        {
          q: "인터넷 연결이 필요한가요?",
          a: "아니요! Wi-Fi나 데이터 없이 오프라인에서 100% 동작합니다."
        },
        {
          q: "고객 지원 문의는 어떻게 하나요?",
          a: "personpick11@gmail.com 으로 언제든 이메일을 보내주시면 신속하게 지원해 드립니다."
        }
      ]
    },
    finalCta: {
      title: "스마트폰 용량을 되찾을 준비가 되셨나요?",
      subtitle: "지금 PhotoClean AI를 다운로드하고 안전하게 사진을 정리하세요.",
      scanToDownload: "QR 코드를 스캔하여 다운로드"
    },
    footer: {
      desc: "iOS 및 Android를 위한 스마트 로컬 사진 클리너 및 보안 금고.",
      support: "고객지원",
      contact: "문의하기",
      privacy: "개인정보 처리방침",
      rights: "All rights reserved."
    }
  },
  zh: {
    nav: {
      features: "核心功能",
      howItWorks: "工作原理",
      useCases: "适用场景",
      faq: "常见问题",
      download: "下载 App",
    },
    hero: {
      badge: "Release 1.0 • 智能相册清理工具",
      title: "清理相册空间，保护个人隐私。",
      subtitle: "轻松清理重复照片、相似连拍、截图与大体积视频。100% 本地隐私安全，完全由你掌握。",
      downloadApp: "免费下载应用",
      exploreFeatures: "探索功能",
      localFirst: "100% 本地处理",
      localFirstSub: "无需上传云端",
      reviewFirst: "预览确认",
      reviewFirstSub: "拒绝误删回忆",
      secretSpace: "隐私保险箱",
      secretSpaceSub: "加密本地加密库",
      scanQr: "扫码下载到手机"
    },
    socialProof: {
      rating: "评分 4.8/5.0",
      storage: "已释放 500,000+ GB 存储",
      privacy: "100% 本地端安全",
      headline: "深受数十万 iPhone 与 Android 用户信赖的安全清理助手"
    },
    problem: {
      tagline: "内存焦虑",
      title: "手机存储空间总是提示已满？",
      items: [
        {
          title: "成千上万张重复与相似照片",
          desc: "高速连拍和多次拍摄产生了大量完全相同的冗余照片，占用数 GB 空间。"
        },
        {
          title: "害怕误删珍贵回忆",
          desc: "传统自动清理软件往往盲目删除，无法细致预览，让人不敢使用。"
        },
        {
          title: "隐私照片暴露在相册中",
          desc: "身份证件、银行卡照与私人照片混杂在主相册中，存在泄露隐患。"
        }
      ]
    },
    solution: {
      tagline: "PhotoClean 解决方案",
      title: "本地智能清理，把控权尽在掌握",
      description: "PhotoClean AI 直接在手机端分析图像特征，归类相似照片，助你挑选最佳留存，安全清除多余照片。",
      points: [
        "端侧 AI 扫描，保证照片绝不出手机。",
        "删除前提供清晰对比预览，需手动确认。",
        "加密隐私保险箱（Secret Space）保护敏感照片。"
      ]
    },
    features: {
      tagline: "核心能力",
      title: "释放手机存储所需的一切工具",
      subtitle: "清理照片杂物，整理回忆，保障文件安全。",
      list: [
        {
          title: "精准重复照片筛选",
          desc: "自动分组完全相同的照片，一键清理多余副本。"
        },
        {
          title: "最佳照片智能推荐",
          desc: "识别连拍组图，自动推荐画质最清晰、构图最佳的照片。"
        },
        {
          title: "大体积视频清理",
          desc: "按文件大小排序，快速找出并清理占用空间的大体积 4K 视频。"
        },
        {
          title: "加密隐私保险箱",
          desc: "在受密码保护的本地保险箱中隐藏私密照片与视频。"
        },
        {
          title: "100% 本地端侧处理",
          desc: "所有分析均在手机 NPU/CPU 上完成，无需连接云端。"
        },
        {
          title: "30天安全恢复保障",
          desc: "删除的照片将移至系统废纸篓，30天内支持轻松还原。"
        }
      ]
    },
    howItWorks: {
      tagline: "简单3步",
      title: "几分钟内清理数 GB 空间",
      steps: [
        {
          number: "01",
          title: "扫描相册",
          desc: "授权相册访问，PhotoClean AI 仅在本地扫描相册。"
        },
        {
          number: "02",
          title: "预览建议",
          desc: "查看自动分组的重复照片与大体积视频列表。"
        },
        {
          number: "03",
          title: "确认并释放",
          desc: "点击清理安全移出所选项目，即刻收回内存。"
        }
      ]
    },
    useCases: {
      tagline: "适用人群",
      title: "为每一位热爱拍照的人打造",
      items: [
        {
          role: "旅行与摄影爱好者",
          scenario: "旅途归来后，迅速清理成百上千张连拍废片与模糊照片。"
        },
        {
          role: "低存储手机用户",
          scenario: "无需每月购买昂贵的云存储，轻松省出 10GB+ 空间。"
        },
        {
          role: "注重隐私保护的用户",
          scenario: "将敏感证件与私人照安全加密保存在保险箱中。"
        }
      ]
    },
    reviews: {
      tagline: "真实用户评价",
      title: "数百万摄影爱好者的信赖之选",
      list: [
        {
          name: "Alex R.",
          role: "iPhone 15 用户",
          comment: "PhotoClean AI 5 分钟内帮我清理了 18GB 空间！删除前能仔细预览，非常放心。",
          rating: 5
        },
        {
          name: "王浩",
          role: "Android 用户",
          comment: "隐私保险箱功能太棒了，藏证件照片很安全，完全本地处理不联网。",
          rating: 5
        },
        {
          name: "Sarah M.",
          role: "内容创作者",
          comment: "以前拍完照片整理重复项要花几个小时，这个应用自动分组省大事了！",
          rating: 5
        }
      ]
    },
    faq: {
      tagline: "热门 FAQ",
      title: "您可能关心的常见问题",
      items: [
        {
          q: "录制视频时手机突然弹窗提示‘存储空间不足’，让人非常沮丧？",
          a: "您并不孤单！超过 75% 的用户因为隐形重复照片和未压缩 4K 视频导致空间吃紧。PhotoClean AI 能在 3 分钟内释放 10GB+。"
        },
        {
          q: "手机因为存了数万张照片和截图而变卡、发热？",
          a: "是的！照片过多会加重设备索引负担。本应用可以在本地安全清理无用照片。"
        },
        {
          q: "有必要每个月花几十块钱购买云存储扩容吗？",
          a: "没必要！在付费订阅云空间前，使用 PhotoClean AI 清理无用重复照片，可以让现有存储耐用得多。"
        },
        {
          q: "如何防止误删珍贵的回忆照片？",
          a: "不同于一键盲删的应用，PhotoClean AI 强制要求用户在对比预览后再进行确认删除。"
        },
        {
          q: "个人证件照片和隐私照片安全吗？",
          a: "100% 安全。应用 100% 离线运行，绝不上传任何照片到网络服务器。"
        },
        {
          q: "如果不小心点错了删除怎么办？",
          a: "不用担心！删除的照片会移至手机原生的‘最近删除’相册中，30 天内均可一键恢复。"
        },
        {
          q: "PhotoClean AI 是免费的吗？",
          a: "是的！核心的重复照片扫描与基础清理功能完全免费。"
        },
        {
          q: "支持 iPhone 和 Android 吗？",
          a: "完全支持，已针对 iOS 与 Android 两个平台深度优化。"
        },
        {
          q: "清理照片需要联网吗？",
          a: "不需要！离线即可完成所有清理工作。"
        },
        {
          q: "需要帮助如何联系客服？",
          a: "您可以随时发送邮件至 personpick11@gmail.com 获取支持。"
        }
      ]
    },
    finalCta: {
      title: "准备好收回您的手机存储空间了吗？",
      subtitle: "立即下载 PhotoClean AI，安全清理相册。",
      scanToDownload: "扫码下载到手机"
    },
    footer: {
      desc: "适用于 iOS 与 Android 的智能本地相册清理与隐私保险箱。",
      support: "支持",
      contact: "联系支持",
      privacy: "隐私政策",
      rights: "版权所有。"
    }
  },
  es: {
    nav: {
      features: "Funciones",
      howItWorks: "Cómo Funciona",
      useCases: "Casos de Uso",
      faq: "Preguntas",
      download: "Descargar App",
    },
    hero: {
      badge: "Release 1.0 • Limpiador de Fotos Inteligente",
      title: "Limpia tu Galería. Mantén tu Privacidad.",
      subtitle: "Revisa fotos duplicadas, tomas similares y videos pesados. Procesamiento 100% local en tu dispositivo.",
      downloadApp: "Descargar App Gratis",
      exploreFeatures: "Explorar Funciones",
      localFirst: "100% Local",
      localFirstSub: "Procesamiento en dispositivo",
      reviewFirst: "Revisión Previa",
      reviewFirstSub: "Sin borrados a ciegas",
      secretSpace: "Espacio Secreto",
      secretSpaceSub: "Bóveda privada encriptada",
      scanQr: "Escanea el QR para descargar"
    },
    socialProof: {
      rating: "Valoración 4.8/5.0",
      storage: "500,000+ GB Liberados",
      privacy: "100% Privacidad Local",
      headline: "Confianza de miles de usuarios para limpiar espacio de forma segura"
    },
    problem: {
      tagline: "Problemas de Almacenamiento",
      title: "¿Tu almacenamiento siempre está lleno?",
      items: [
        {
          title: "Miles de Fotos Duplicadas",
          desc: "Las ráfagas dejan cientos de fotos idénticas ocupando gigabytes."
        },
        {
          title: "Temor a Borrar Recuerdos",
          desc: "Los limpiadores automáticos suelen borrar fotos importantes sin previa vista."
        },
        {
          title: "Fotos Privadas Expuestas",
          desc: "Documentos y fotos sensibles visibles en la galería principal."
        }
      ]
    },
    solution: {
      tagline: "Solución PhotoClean",
      title: "Limpieza Inteligente y Control Total",
      description: "PhotoClean AI analiza fotos en el dispositivo. Agrupa tomas parecidas para guardar la mejor y borrar el resto.",
      points: [
        "Escaneo en el dispositivo: tus fotos nunca salen de tu teléfono.",
        "Vista previa y confirmación antes de eliminar.",
        "Espacio Secreto encriptado para fotos sensibles."
      ]
    },
    features: {
      tagline: "Capacidades Clave",
      title: "Todo lo Necesario para Liberar Almacenamiento",
      subtitle: "Limpia fotos duplicadas, organiza recuerdos y protege archivos.",
      list: [
        {
          title: "Detección de Duplicados",
          desc: "Agrupa fotos idénticas para borrarlas en un toque."
        },
        {
          title: "Selección de Mejor Foto",
          desc: "Identifica ráfagas y recomienda la mejor toma."
        },
        {
          title: "Limpiador de Videos Pesados",
          desc: "Ordena videos por tamaño para eliminar archivos 4K pesados."
        },
        {
          title: "Espacio Secreto Encriptado",
          desc: "Oculta fotos y videos bajo contraseña local."
        },
        {
          title: "100% Procesamiento Local",
          desc: "Análisis ejecutado en el chip de tu teléfono."
        },
        {
          title: "Papelera de 30 Días",
          desc: "Recuperación sencilla durante 30 días si cambias de opinión."
        }
      ]
    },
    howItWorks: {
      tagline: "3 Pasos Fáciles",
      title: "Limpia tu Espacio en Minutos",
      steps: [
        {
          number: "01",
          title: "Escanea tu Galería",
          desc: "Otorga acceso. PhotoClean AI escanea localmente."
        },
        {
          number: "02",
          title: "Revisa Sugerencias",
          desc: "Inspecciona los grupos de fotos duplicadas y videos."
        },
        {
          number: "03",
          title: "Confirma y Libera",
          desc: "Toca limpiar para eliminar de forma segura."
        }
      ]
    },
    useCases: {
      tagline: "Casos de Uso",
      title: "Para Todos los que Aman Tomar Fotos",
      items: [
        {
          role: "Viajeros y Fotógrafos",
          scenario: "Limpia fotos borrosas y ráfagas tras un viaje."
        },
        {
          role: "Usuarios con Poco Espacio",
          scenario: "Libera 10GB+ sin pagar suscripciones en la nube."
        },
        {
          role: "Usuarios Conscientes de la Privacidad",
          scenario: "Guarda documentos confidenciales en el Espacio Secreto."
        }
      ]
    },
    reviews: {
      tagline: "Reseñas Reales",
      title: "Amado por Millones de Usuarios",
      list: [
        {
          name: "Carlos M.",
          role: "Usuario de iPhone 15",
          comment: "¡Liberó 18GB en 5 minutos! Me encanta poder revisar todo antes de borrar.",
          rating: 5
        },
        {
          name: "Laura G.",
          role: "Usuario de Android",
          comment: "El Espacio Secreto es perfecto para ocultar documentos importantes.",
          rating: 5
        },
        {
          name: "David S.",
          role: "Creador de Contenido",
          comment: "Ahorro horas agrupando fotos similares de mis sesiones fotográficas.",
          rating: 5
        }
      ]
    },
    faq: {
      tagline: "Preguntas Frecuentes",
      title: "Dudas Habituales",
      items: [
        {
          q: "¿Te quedas sin espacio al grabar video?",
          a: "Más del 75% de los usuarios sufren este problema por duplicados y videos 4K. Liberamos 10GB+ en 3 minutos."
        },
        {
          q: "¿Tu teléfono va lento por miles de fotos?",
          a: "Sí, tantas fotos ralentizan el sistema. PhotoClean AI las organiza de forma segura."
        },
        {
          q: "¿Es necesario pagar almacenamiento en la nube?",
          a: "¡No! Limpia duplicados antes de pagar tarifas mensuales."
        },
        {
          q: "¿Cómo evitar borrar fotos valiosas por error?",
          a: "Requerimos confirmación manual tras una vista previa clara."
        },
        {
          q: "¿Están seguras mis fotos personales?",
          a: "100% seguras. Procesamiento local sin subir nada a internet."
        },
        {
          q: "¿Y si borro algo por equivocación?",
          a: "Van a la papelera nativa, recuperables durante 30 días."
        },
        {
          q: "¿La app es gratis?",
          a: "Sí, las funciones principales son 100% gratuitas."
        },
        {
          q: "¿Funciona en iOS y Android?",
          a: "Sí, totalmente optimizada para ambos sistemas."
        },
        {
          q: "¿Necesita internet?",
          a: "No, funciona 100% offline."
        },
        {
          q: "¿Cómo contactar con soporte?",
          a: "Escríbenos a personpick11@gmail.com para ayuda rápida."
        }
      ]
    },
    finalCta: {
      title: "¿Listo para Liberar tu Teléfono?",
      subtitle: "Descarga PhotoClean AI y limpia tu galería de forma segura.",
      scanToDownload: "Escanea el código QR"
    },
    footer: {
      desc: "Limpiador de fotos inteligente y seguro para iOS y Android.",
      support: "Soporte",
      contact: "Contacto",
      privacy: "Política de Privacidad",
      rights: "Todos los derechos reservados."
    }
  },
  fr: {
    nav: {
      features: "Fonctionnalités",
      howItWorks: "Fonctionnement",
      useCases: "Cas d'usage",
      faq: "FAQ",
      download: "Télécharger",
    },
    hero: {
      badge: "Release 1.0 • Nettoyeur de Photos Intelligent",
      title: "Nettoyez votre Galerie. Préservez votre Vie Privée.",
      subtitle: "Passez en revue doublons, photos similaires et vidéos lourdes. Traitement 100% local pour une confidentialité totale.",
      downloadApp: "Télécharger Gratuitement",
      exploreFeatures: "Explorer",
      localFirst: "100% Local",
      localFirstSub: "Traitement sur l'appareil",
      reviewFirst: "Vérification Avant",
      reviewFirstSub: "Pas de suppression à l'aveugle",
      secretSpace: "Espace Secret",
      secretSpaceSub: "Coffre-fort chiffré",
      scanQr: "Scannez le QR code sur mobile"
    },
    socialProof: {
      rating: "Note 4.8/5.0",
      storage: "500 000+ GO Libérés",
      privacy: "100% Confidentialité Locale",
      headline: "Adopté par des milliers d'utilisateurs pour nettoyer leur téléphone."
    },
    problem: {
      tagline: "Problèmes de Stockage",
      title: "Votre téléphone manque-t-il toujours d'espace ?",
      items: [
        {
          title: "Des Milliers de Photos en Double",
          desc: "Les modes rafale créent des centaines de photos identiques inutilement."
        },
        {
          title: "Peur de Supprimer des Souvenirs",
          desc: "Les nettoyeurs automatiques effacent souvent vos fichiers sans prévisualisation."
        },
        {
          title: "Photos Privées Exposées",
          desc: "Documents personnels et photos sensibles visibles dans la galerie."
        }
      ]
    },
    solution: {
      tagline: "Solution PhotoClean",
      title: "Nettoyage Intelligent sous votre Contrôle",
      description: "L'IA analyse les photos sur votre appareil et regroupe les clichés similaires pour ne garder que le meilleur.",
      points: [
        "Scan local : vos photos ne quittent jamais votre téléphone.",
        "Prévisualisation claire avant toute suppression.",
        "Espace Secret chiffré par code PIN ou biométrie."
      ]
    },
    features: {
      tagline: "Fonctionnalités Clés",
      title: "Tout pour Libérer de l'Espace",
      subtitle: "Nettoyez les doublons, organisez vos souvenirs et sécurisez vos fichiers.",
      list: [
        {
          title: "Détection des Doublons",
          desc: "Regroupe les photos identiques pour les effacer en un geste."
        },
        {
          title: "Sélection de la Meilleure Photo",
          desc: "Recommande la photo la plus nette parmi les séries de rafales."
        },
        {
          title: "Nettoyeur de Vidéos Lourdes",
          desc: "Trie les vidéos par taille pour supprimer les gros fichiers 4K."
        },
        {
          title: "Espace Secret Chiffré",
          desc: "Masquez vos photos et vidéos privées dans un coffre sécurisé."
        },
        {
          title: "100% Traitement Local",
          desc: "Analyse réalisée sur la puce de votre smartphone."
        },
        {
          title: "Corbeille 30 Jours",
          desc: "Récupération facile sous 30 jours en cas d'erreur."
        }
      ]
    },
    howItWorks: {
      tagline: "3 Étapes Simples",
      title: "Libérez du Stockage en Quelques Minutes",
      steps: [
        {
          number: "01",
          title: "Scannez votre Galerie",
          desc: "Autorisez l'accès. PhotoClean IA analyse localement."
        },
        {
          number: "02",
          title: "Examinez les Suggestions",
          desc: "Vérifiez les doublons et les vidéos lourdes."
        },
        {
          number: "03",
          title: "Confirmez & Libérez",
          desc: "Appuyez sur nettoyer pour supprimer en toute sécurité."
        }
      ]
    },
    useCases: {
      tagline: "Cas d'Usage",
      title: "Conçu pour Tous les Amateurs de Photos",
      items: [
        {
          role: "Voyageurs et Photographes",
          scenario: "Nettoyez rapidement les rafales et photos floues après un voyage."
        },
        {
          role: "Petits Stockages",
          scenario: "Libérez 10 Go+ sans vous abonner au cloud."
        },
        {
          role: "Soucieux de la Confidentialité",
          scenario: "Stockez vos pièces d'identité dans l'Espace Secret."
        }
      ]
    },
    reviews: {
      tagline: "Avis Utilisateurs",
      title: "Apprécié par des Millions d'Utilisateurs",
      list: [
        {
          name: "Antoine B.",
          role: "Utilisateur iPhone 15",
          comment: "18 Go libérés en 5 minutes ! J'ai pu tout vérifier avant de supprimer.",
          rating: 5
        },
        {
          name: "Julie M.",
          role: "Utilisatrice Android",
          comment: "L'Espace Secret est parfait pour cacher mes documents personnels.",
          rating: 5
        },
        {
          name: "Marc D.",
          role: "Créateur de Contenu",
          comment: "Un gain de temps phénoménal après mes sessions photos !",
          rating: 5
        }
      ]
    },
    faq: {
      tagline: "Foire Aux Questions",
      title: "Questions Fréquentes",
      items: [
        {
          q: "Bloqué par l'erreur 'Stockage saturé' en vidéo ?",
          a: "75% des utilisateurs manquent d'espace à cause des doublons. Nous libérons 10 Go+ en 3 minutes."
        },
        {
          q: "Téléphone ralenti par trop de photos ?",
          a: "Oui, un trop grand nombre de fichiers ralentit le système. Nettoyez-le en sécurité."
        },
        {
          q: "Faut-il payer un stockage cloud mensuel ?",
          a: "Non ! Supprimez les doublons avant d'acheter du stockage supplémentaire."
        },
        {
          q: "Comment éviter de supprimer des souvenirs ?",
          a: "Une validation manuelle est requise après prévisualisation."
        },
        {
          q: "Mes photos sont-elles en sécurité ?",
          a: "100% sécurisées. Tout est traité en local sur l'appareil."
        },
        {
          q: "En cas d'erreur de suppression ?",
          a: "Les fichiers vont dans la corbeille système pendant 30 jours."
        },
        {
          q: "L'application est-elle gratuite ?",
          a: "Oui, les fonctions de base sont entièrement gratuites."
        },
        {
          q: "Compatible iPhone et Android ?",
          a: "Oui, optimisée pour les deux systèmes."
        },
        {
          q: "Besoin d'une connexion internet ?",
          a: "Non, fonctionne 100% hors-ligne."
        },
        {
          q: "Comment contacter le support ?",
          a: "Écrivez-nous à personpick11@gmail.com."
        }
      ]
    },
    finalCta: {
      title: "Prêt à Libérer votre Téléphone ?",
      subtitle: "Téléchargez PhotoClean AI et nettoyez votre galerie dès aujourd'hui.",
      scanToDownload: "Scannez le QR code"
    },
    footer: {
      desc: "Nettoyeur de photos intelligent et sécurisé pour iOS et Android.",
      support: "Support",
      contact: "Contact",
      privacy: "Politique de Confidentialité",
      rights: "Tous droits réservés."
    }
  },
  de: {
    nav: {
      features: "Funktionen",
      howItWorks: "So geht's",
      useCases: "Anwendungsfälle",
      faq: "FAQ",
      download: "App Laden",
    },
    hero: {
      badge: "Release 1.0 • Intelligenter Foto-Reiniger",
      title: "Foto-Mediathek aufräumen. Datenschutz bewahren.",
      subtitle: "Überprüfe doppelte Fotos, ähnliche Aufnahmen und große Videos. 100% lokale Verarbeitung für maximale Privatsphäre.",
      downloadApp: "Kostenlose App Laden",
      exploreFeatures: "Funktionen Entdecken",
      localFirst: "100% Lokal",
      localFirstSub: "Verarbeitung auf dem Gerät",
      reviewFirst: "Vorab-Prüfung",
      reviewFirstSub: "Kein blindes Löschen",
      secretSpace: "Geheim-Tresor",
      secretSpaceSub: "Verschlüsselter Bereich",
      scanQr: "QR-Code scannen zum Download"
    },
    socialProof: {
      rating: "Bewertung 4.8/5.0",
      storage: "500.000+ GB Speicher Freigegeben",
      privacy: "100% Lokaler Datenschutz",
      headline: "Von Tausenden Nutzern geschätzt, um Speicher sicher aufzuräumen."
    },
    problem: {
      tagline: "Speicherprobleme",
      title: "Ist dein Telefonspeicher ständig voll?",
      items: [
        {
          title: "Tausende doppelte Fotos",
          desc: "Serienaufnahmen hinterlassen hunderte identische Fotos, die Gigabytes belegen."
        },
        {
          title: "Angst vor versehentlichem Löschen",
          desc: "Automatische Reiniger löschen oft wichtige Erinnerungen ohne Vorschau."
        },
        {
          title: "Ungeschützte private Fotos",
          desc: "Dokumente und persönliche Bilder liegen offen in der Mediathek."
        }
      ]
    },
    solution: {
      tagline: "PhotoClean Lösung",
      title: "Intelligente Bereinigung unter deiner Kontrolle",
      description: "PhotoClean AI analysiert Fotos auf dem Gerät. Ähnliche Bilder werden gruppiert, damit du das beste Foto auswählen kannst.",
      points: [
        "Lokaler AI-Scan: Fotos verlassen niemals dein Smartphone.",
        "Klare Vorschau vor jedem Löschvorgang.",
        "Verschlüsselter Geheim-Tresor für sensible Fotos."
      ]
    },
    features: {
      tagline: "Kernfunktionen",
      title: "Alles, was du zum Freimachen von Speicher brauchst",
      subtitle: "Doppelte Fotos aufräumen, Erinnerungen ordnen und Dateien sichern.",
      list: [
        {
          title: "Doppelte Fotos Erkennen",
          desc: "Gruppiert identische Bilder zum Löschen mit einem Tippen."
        },
        {
          title: "Beste-Foto-Auswahl",
          desc: "Erkennt Serienbilder und empfiehlt das schärfste Foto."
        },
        {
          title: "Große Videos Reinigen",
          desc: "Sortiert Videos nach Dateigröße zum schnellen Aufräumen von 4K-Videos."
        },
        {
          title: "Geheim-Tresor",
          desc: "Schütze private Fotos mit einem Passwort."
        },
        {
          title: "100% Lokale Verarbeitung",
          desc: "Analyse läuft auf dem Neural Engine deines Smartphones."
        },
        {
          title: "30 Tage Wiederherstellung",
          desc: "Gelöschte Elemente landen im Papierkorb und sind 30 Tage lang wiederherstellbar."
        }
      ]
    },
    howItWorks: {
      tagline: "3 Einfache Schritte",
      title: "Speicher in wenigen Minuten Freigeben",
      steps: [
        {
          number: "01",
          title: "Mediathek Scannen",
          desc: "Zugriff erlauben. PhotoClean AI scannt lokal auf dem Gerät."
        },
        {
          number: "02",
          title: "Vorschläge Prüfen",
          desc: "Gruppierte Duplikate und große Videos durchsehen."
        },
        {
          number: "03",
          title: "Bestätigen & Speicher Sparen",
          desc: "Tippe auf Bereinigen, um Elemente sicher zu entfernen."
        }
      ]
    },
    useCases: {
      tagline: "Anwendungsfälle",
      title: "Für jeden, der gerne Fotos macht",
      items: [
        {
          role: "Reisende & Fotografen",
          scenario: "Nach dem Urlaub Serienbilder und unscharfe Fotos schnell aussortieren."
        },
        {
          role: "Geringer Speicher",
          scenario: "10GB+ Speicher sparen ohne teure Cloud-Abos."
        },
        {
          role: "Datenschutz-Bewusste",
          scenario: "Wichtige Dokumente sicher im Geheim-Tresor ablegen."
        }
      ]
    },
    reviews: {
      tagline: "Echte Bewertungen",
      title: "Beliebt bei Millionen von Nutzern",
      list: [
        {
          name: "Michael K.",
          role: "iPhone 15 Nutzer",
          comment: "18GB in 5 Minuten freigegeben! Super, dass man vorher alles prüfen kann.",
          rating: 5
        },
        {
          name: "Anna S.",
          role: "Android Nutzerin",
          comment: "Der Geheim-Tresor ist perfekt, um Dokumente sicher zu verstecken.",
          rating: 5
        },
        {
          name: "Stefan R.",
          role: "Content Creator",
          comment: "Spart enorm viel Zeit beim Aussortieren nach Fotoshootings!",
          rating: 5
        }
      ]
    },
    faq: {
      tagline: "Häufig Gestellte Fragen",
      title: "Häufige Fragen & Antworten",
      items: [
        {
          q: "Meldung 'Speicher voll' beim Videoaufnehmen?",
          a: "75% der Nutzer leiden unter verdeckten Duplikaten. Wir geben 10GB+ in 3 Minuten frei."
        },
        {
          q: "Smartphone langsam wegen zu vieler Fotos?",
          a: "Ja, zu viele Dateien verlangsamen den Index. Mit der App sicher aufräumen."
        },
        {
          q: "Lohnt sich ein monatliches Cloud-Abo?",
          a: "Nein! Erst Duplikate aufräumen, bevor du für mehr Speicher zahlst."
        },
        {
          q: "Wie wird versehentliches Löschen verhindert?",
          a: "Eine manuelle Bestätigung nach der Vorschau ist zwingend erforderlich."
        },
        {
          q: "Sind meine Fotos sicher?",
          a: "100% sicher. Alles wird lokal auf dem Smartphone verarbeitet."
        },
        {
          q: "Was passiert bei versehentlichem Löschen?",
          a: "Dateien landen im System-Papierkorb (30 Tage Wiederherstellung)."
        },
        {
          q: "Ist die App kostenlos?",
          a: "Ja, die Kernfunktionen sind 100% kostenlos."
        },
        {
          q: "Für iOS und Android verfügbar?",
          a: "Ja, für beide Systeme optimiert."
        },
        {
          q: "Wird Internet benötigt?",
          a: "Nein, funktioniert 100% offline."
        },
        {
          q: "Wie erreiche ich den Support?",
          a: "Schreibe uns an personpick11@gmail.com."
        }
      ]
    },
    finalCta: {
      title: "Bereit, Speicherplatz Freizugeben?",
      subtitle: "Lade PhotoClean AI jetzt herunter und reinige deine Mediathek sicher.",
      scanToDownload: "QR-Code scannen"
    },
    footer: {
      desc: "Intelligenter und sicherer Foto-Reiniger für iOS und Android.",
      support: "Support",
      contact: "Kontakt",
      privacy: "Datenschutzrichtlinie",
      rights: "Alle Rechte vorbehalten."
    }
  },
  pt: {
    nav: {
      features: "Recursos",
      howItWorks: "Como Funciona",
      useCases: "Casos de Uso",
      faq: "Perguntas",
      download: "Baixar App",
    },
    hero: {
      badge: "Release 1.0 • Limpador de Fotos Inteligente",
      title: "Limpe sua Galeria. Mantenha sua Privacidade.",
      subtitle: "Revise fotos duplicadas, fotos parecidas e vídeos grandes. Processamento 100% local com controle total do usuário.",
      downloadApp: "Baixar App Grátis",
      exploreFeatures: "Explorar Recursos",
      localFirst: "100% Local",
      localFirstSub: "Processamento no dispositivo",
      reviewFirst: "Revisão Prévia",
      reviewFirstSub: "Sem exclusões cegas",
      secretSpace: "Espaço Secreto",
      secretSpaceSub: "Cofre privado criptografado",
      scanQr: "Escaneie o QR para baixar no celular"
    },
    socialProof: {
      rating: "Avaliação 4.8/5.0",
      storage: "500.000+ GB Liberados",
      privacy: "100% Privacidade Local",
      headline: "Confiança de milhares de usuários para limpar armazenamento com segurança."
    },
    problem: {
      tagline: "Problemas de Armazenamento",
      title: "Seu celular está sempre com a memória cheia?",
      items: [
        {
          title: "Milhares de Fotos Duplicadas",
          desc: "Modos de disparo contínuo deixam centenas de fotos idênticas ocupando espaço."
        },
        {
          title: "Medo de Apagar Memórias",
          desc: "Limpadores automáticos costumam apagar fotos importantes sem prévia."
        },
        {
          title: "Fotos Privadas Expostas",
          desc: "Documentos e fotos pessoais visíveis na galeria principal."
        }
      ]
    },
    solution: {
      tagline: "Solução PhotoClean",
      title: "Limpeza Inteligente com Controle Total",
      description: "PhotoClean AI analisa fotos no celular. Agrupa disparos semelhantes para você escolher a melhor foto e apagar o resto.",
      points: [
        "Escaneamento no dispositivo: suas fotos nunca saem do celular.",
        "Pré-visualização clara antes de qualquer exclusão.",
        "Espaço Secreto criptografado para proteger fotos sensíveis."
      ]
    },
    features: {
      tagline: "Recursos Principais",
      title: "Tudo o que Você Precisa para Liberar Espaço",
      subtitle: "Limpe fotos duplicadas, organize memórias e proteja arquivos.",
      list: [
        {
          title: "Detecção de Duplicadas",
          desc: "Agrupa fotos idênticas para apagar em um toque."
        },
        {
          title: "Seleção da Melhor Foto",
          desc: "Identifica rajadas de fotos e recomenda a foto mais nítida."
        },
        {
          title: "Limpador de Vídeos Grandes",
          desc: "Ordena vídeos por tamanho para apagar arquivos 4K pesados."
        },
        {
          title: "Espaço Secreto Criptografado",
          desc: "Oculte fotos e vídeos privados sob senha local."
        },
        {
          title: "100% Processamento Local",
          desc: "Análise realizada no processador do seu próprio celular."
        },
        {
          title: "Lixeira de 30 Dias",
          desc: "Recuperação fácil em até 30 dias se mudar de ideia."
        }
      ]
    },
    howItWorks: {
      tagline: "3 Passos Fáceis",
      title: "Limpe Espaço em Minutos",
      steps: [
        {
          number: "01",
          title: "Escaneie sua Galeria",
          desc: "Conceda acesso. O PhotoClean AI escaneia localmente."
        },
        {
          number: "02",
          title: "Revise Sugestões",
          desc: "Inspecione grupos de duplicadas e vídeos grandes."
        },
        {
          number: "03",
          title: "Confirme & Libere Espaço",
          desc: "Toque em limpar para remover com segurança."
        }
      ]
    },
    useCases: {
      tagline: "Casos de Uso",
      title: "Criado para Quem Ama Tirar Fotos",
      items: [
        {
          role: "Viajantes e Fotógrafos",
          scenario: "Limpe fotos borradas e rajadas após uma viagem."
        },
        {
          role: "Celulares de Pouca Memória",
          scenario: "Libere 10GB+ sem pagar assinaturas de nuvem."
        },
        {
          role: "Preocupados com Privacidade",
          scenario: "Guarde documentos confidenciais no Espaço Secreto."
        }
      ]
    },
    reviews: {
      tagline: "Avaliações Reais",
      title: "Amado por Milhões de Usuários",
      list: [
        {
          name: "Lucas P.",
          role: "Usuário de iPhone 15",
          comment: "Liberou 18GB em 5 minutos! Muito bom poder conferir tudo antes de apagar.",
          rating: 5
        },
        {
          name: "Mariana R.",
          role: "Usuária de Android",
          comment: "O Espaço Secreto é ótimo para esconder fotos de documentos.",
          rating: 5
        },
        {
          name: "Gabriel S.",
          role: "Criador de Conteúdo",
          comment: "Economiza horas agrupando fotos parecidas das minhas fotoshoots!",
          rating: 5
        }
      ]
    },
    faq: {
      tagline: "Perguntas Frequentes",
      title: "Dúvidas Frequentes",
      items: [
        {
          q: "Aviso de 'Armazenamento Cheio' ao gravar vídeo?",
          a: "Mais de 75% dos usuários sofrem com fotos duplicadas. Liberamos 10GB+ em 3 minutos."
        },
        {
          q: "Celular lento por causa de fotos?",
          a: "Sim, excesso de fotos desacelera o sistema. Limpe com segurança."
        },
        {
          q: "Preciso pagar por nuvem todo mês?",
          a: "Não! Limpe duplicadas antes de pagar assinaturas mensais."
        },
        {
          q: "Como evitar apagar memórias importantes?",
          a: "Exigimos confirmação manual após pré-visualização."
        },
        {
          q: "Minhas fotos pessoais estão seguras?",
          a: "100% seguras. Processamento local sem envio à internet."
        },
        {
          q: "E se eu apagar algo por engano?",
          a: "Vão para a lixeira do sistema, recuperáveis por 30 dias."
        },
        {
          q: "O app é gratuito?",
          a: "Sim, os recursos principais são 100% gratuitos."
        },
        {
          q: "Funciona em iOS e Android?",
          a: "Sim, totalmente otimizado para ambos os sistemas."
        },
        {
          q: "Precisa de internet?",
          a: "Não, funciona 100% offline."
        },
        {
          q: "Como falar com o suporte?",
          a: "Escreva para personpick11@gmail.com."
        }
      ]
    },
    finalCta: {
      title: "Pronto para Liberar seu Celular?",
      subtitle: "Baixe o PhotoClean AI e limpe sua galeria com segurança hoje.",
      scanToDownload: "Escaneie o código QR"
    },
    footer: {
      desc: "Limpador de fotos inteligente e seguro para iOS e Android.",
      support: "Suporte",
      contact: "Contato",
      privacy: "Política de Privacidade",
      rights: "Todos os direitos reservados."
    }
  },
  it: {
    nav: {
      features: "Funzionalità",
      howItWorks: "Come Funziona",
      useCases: "Casi d'Uso",
      faq: "FAQ",
      download: "Scarica App",
    },
    hero: {
      badge: "Release 1.0 • Pulizia Foto Intelligente",
      title: "Pulisci la tua Galleria. Mantieni la Privacy.",
      subtitle: "Rivedi foto duplicate, scatti simili e video pesanti. Elaborazione 100% locale sul tuo dispositivo.",
      downloadApp: "Scarica App Gratis",
      exploreFeatures: "Esplora Funzioni",
      localFirst: "100% Locale",
      localFirstSub: "Elaborazione sul dispositivo",
      reviewFirst: "Anteprima Sicura",
      reviewFirstSub: "Nessun azzeramento al buio",
      secretSpace: "Spazio Segreto",
      secretSpaceSub: "Cassaforte crittografata",
      scanQr: "Scansiona il QR per scaricare"
    },
    socialProof: {
      rating: "Valutazione 4.8/5.0",
      storage: "500.000+ GB Liberati",
      privacy: "100% Privacy Locale",
      headline: "Scelto da centinaia di migliaia di utenti per liberare memoria in sicurezza."
    },
    problem: {
      tagline: "Problemi di Memoria",
      title: "La memoria del tuo telefono è sempre piena?",
      items: [
        {
          title: "Migliaia di Foto Duplicate",
          desc: "Gli scatti in sequenza creano centinaia di foto identiche che occupano gigabyte."
        },
        {
          title: "Paura di Eliminare Ricordi",
          desc: "I pulitori automatici eliminano spesso foto importanti senza anteprima."
        },
        {
          title: "Foto Private Esposte",
          desc: "Documenti personali e foto sensibili visibili nella galleria principale."
        }
      ]
    },
    solution: {
      tagline: "Soluzione PhotoClean",
      title: "Pulizia Intelligente sotto il tuo Controllo",
      description: "PhotoClean AI analizza le foto direttamente sul dispositivo. Raggruppa scatti simili per scegliere la foto migliore e cancellare i duplicati.",
      points: [
        "Scansione locale: le foto non lasciano mai il tuo telefono.",
        "Anteprima chiara prima di qualsiasi eliminazione.",
        "Spazio Segreto crittografato per proteggere le foto sensibili."
      ]
    },
    features: {
      tagline: "Funzioni Principali",
      title: "Tutto ciò che Serve per Liberare Spazio",
      subtitle: "Pulisci foto duplicate, organizza i ricordi e proteggi i tuoi file.",
      list: [
        {
          title: "Rilevamento Foto Duplicate",
          desc: "Raggruppa le foto identiche per eliminarle in un tap."
        },
        {
          title: "Selezione Scatto Migliore",
          desc: "Riconosce le sequenze e consiglia la foto più nitida."
        },
        {
          title: "Pulizia Video Pesanti",
          desc: "Ordina i video per dimensione per eliminare quelli in 4K."
        },
        {
          title: "Spazio Segreto Crittografato",
          desc: "Nascondi foto e video privati in una cassaforte locale."
        },
        {
          title: "100% Elaborazione Locale",
          desc: "Analisi eseguita sul processore del tuo telefono."
        },
        {
          title: "Cestino per 30 Giorni",
          desc: "Recupero facile per 30 giorni in caso di ripensamento."
        }
      ]
    },
    howItWorks: {
      tagline: "3 Semplici Passaggi",
      title: "Libera Memoria in Pochi Minuti",
      steps: [
        {
          number: "01",
          title: "Scansiona la Galleria",
          desc: "Concedi l'accesso. PhotoClean AI analizza in locale."
        },
        {
          number: "02",
          title: "Rivedi i Suggerimenti",
          desc: "Ispeziona gruppi di duplicati e video pesanti."
        },
        {
          number: "03",
          title: "Conferma e Libera Spazio",
          desc: "Tocca pulisci per rimuovere in sicurezza."
        }
      ]
    },
    useCases: {
      tagline: "Casi d'Uso",
      title: "Creato per Chi Ama Scattare Foto",
      items: [
        {
          role: "Viaggiatori e Fotografi",
          scenario: "Pulisci foto sfocate e sequenze dopo un viaggio."
        },
        {
          role: "Telefoni con Poca Memoria",
          scenario: "Libera 10GB+ senza pagare abbonamenti cloud."
        },
        {
          role: "Attenti alla Privacy",
          scenario: "Conserva documenti riservati nello Spazio Segreto."
        }
      ]
    },
    reviews: {
      tagline: "Recensioni Reali",
      title: "Amato da Milioni di Utenti",
      list: [
        {
          name: "Marco V.",
          role: "Utente iPhone 15",
          comment: "Liberati 18GB in 5 minuti! Ottimo poter controllare tutto prima di eliminare.",
          rating: 5
        },
        {
          name: "Giulia R.",
          role: "Utente Android",
          comment: "Lo Spazio Segreto è perfetto per nascondere foto di documenti.",
          rating: 5
        },
        {
          name: "Matteo S.",
          role: "Content Creator",
          comment: "Risparmio ore di lavoro nel raggruppare foto simili dei miei shooting!",
          rating: 5
        }
      ]
    },
    faq: {
      tagline: "Domande Frequenti",
      title: "Domande Comuni",
      items: [
        {
          q: "Avviso 'Memoria Piena' durante i video?",
          a: "Oltre il 75% degli utenti soffre per foto duplicate. Liberiamo 10GB+ in 3 minuti."
        },
        {
          q: "Telefono lento a causa delle troppe foto?",
          a: "Sì, troppi file rallentano il sistema. Pulisci in sicurezza."
        },
        {
          q: "Devo pagare per il cloud ogni mese?",
          a: "No! Pulisci i duplicati prima di pagare per altro spazio."
        },
        {
          q: "Come evitare di cancellare ricordi importanti?",
          a: "Richiediamo la conferma manuale dopo l'anteprima."
        },
        {
          q: "Le mie foto personali sono al sicuro?",
          a: "100% al sicuro. Tutto viene elaborato in locale."
        },
        {
          q: "E se elimino qualcosa per sbaglio?",
          a: "Vanno nel cestino di sistema, recuperabili per 30 giorni."
        },
        {
          q: "L'app è gratuita?",
          a: "Sì, le funzioni principali sono 100% gratuite."
        },
        {
          q: "Funziona su iOS e Android?",
          a: "Sì, completamente ottimizzata per entrambi i sistemi."
        },
        {
          q: "Serve la connessione internet?",
          a: "No, funziona 100% offline."
        },
        {
          q: "Come contattare l'assistenza?",
          a: "Scrivici a personpick11@gmail.com per aiuto."
        }
      ]
    },
    finalCta: {
      title: "Pronto a Liberare il tuo Telefono?",
      subtitle: "Scarica PhotoClean AI e pulisci la tua galleria in sicurezza oggi.",
      scanToDownload: "Scansiona il codice QR"
    },
    footer: {
      desc: "Pulizia foto intelligente e sicura per iOS e Android.",
      support: "Supporto",
      contact: "Contatto",
      privacy: "Informativa sulla Privacy",
      rights: "Tutti i diritti riservati."
    }
  }
};
