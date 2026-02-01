import NotFound from "@/shared/ui/NotFound";

const NotFoundPage = () => {
  return (
    <NotFound
      title="404"
      subtitle="К сожалению, мы не можем найти эту страницу. Но не волнуйтесь - Вы можете найти много интересного на главной странице."
      buttonLabel="На главную"
      to="/"
      icon="sad"
    />
  );
};
export default NotFoundPage;
