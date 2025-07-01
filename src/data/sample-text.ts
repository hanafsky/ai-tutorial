export const sampleTexts = {
  article: `
人工知能（AI）は現代社会において急速に発展を遂げている技術分野です。機械学習、深層学習、自然言語処理などの技術により、AIは様々な業界で革新的な変化をもたらしています。

医療分野では、AIが病気の早期発見や診断支援に活用されており、従来では発見が困難だった症状も正確に検出できるようになりました。また、画像診断においても、放射線科医の診断精度を向上させる重要な役割を果たしています。

教育分野においても、AIは個人に最適化された学習体験を提供することで、学習効率の向上に貢献しています。学習者の理解度や進捗状況を分析し、最適な学習コンテンツを推奨するシステムが開発されています。

しかし、AIの発展には課題も存在します。プライバシーの保護、雇用への影響、アルゴリズムの透明性など、社会全体で議論すべき問題が多くあります。これらの課題に適切に対処しながら、AIの恩恵を最大限に活用することが重要です。

今後、AIはさらなる進歩を遂げ、私たちの生活をより豊かで便利なものにしていくでしょう。同時に、倫理的な観点からのガイドラインや規制の整備も進んでいくことが予想されます。
  `,
  
  business: `
弊社では、来四半期より新しい営業戦略を導入する予定です。主な変更点は、デジタルマーケティングの強化と顧客データの活用による個別化されたアプローチです。

従来の営業手法に加え、オンラインでの顧客接点を増やし、ウェブサイトやSNSを通じた情報発信を強化します。また、CRMシステムを導入し、顧客の購買履歴や行動パターンを分析することで、より効果的な提案を行うことができます。

この戦略変更により、営業効率の向上と売上の拡大を目指します。全営業担当者には新しいツールの使い方に関する研修を実施し、スムーズな移行を図ります。

目標として、来四半期中に売上を15%向上させることを掲げています。定期的な進捗確認を行い、必要に応じて戦略の調整も検討いたします。

ご不明な点がございましたら、営業部までお問い合わせください。皆様のご協力をお願いいたします。
  `,

  technical: `
This system implements a distributed microservices architecture using Docker containers and Kubernetes orchestration. The application consists of several key components: an API gateway for request routing, multiple service instances for business logic processing, and a Redis cluster for caching frequently accessed data.

The authentication service handles user login and JWT token generation, while the user management service processes profile updates and account settings. Data persistence is achieved through a MongoDB cluster with automatic failover capabilities.

To ensure high availability, we've implemented health checks for all services and configured automatic scaling based on CPU and memory usage metrics. The monitoring stack includes Prometheus for metrics collection and Grafana for visualization.

Deployment is managed through GitLab CI/CD pipelines, with automated testing at each stage. Code quality gates ensure that only properly tested code reaches production environments.

Performance optimizations include database query optimization, connection pooling, and strategic caching layers. The system can handle up to 10,000 concurrent users with response times under 200ms for most operations.
  `
};

export type SampleTextKey = keyof typeof sampleTexts;