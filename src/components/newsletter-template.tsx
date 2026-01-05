import * as React from "react";

interface NewsletterTemplateProps {
  email: string;
}

export const NewsletterTemplate: React.FC<Readonly<NewsletterTemplateProps>> = ({
  email,
}) => (
  <div>
    <h1>New Newsletter Subscriber! 🚀</h1>
    <p>
      <strong>Email:</strong> {email}
    </p>
    <p>You should add this person to your mailing list.</p>
  </div>
);