import "bootstrap/dist/css/bootstrap.min.css";

const NotFound = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light text-center">
      <h1 className="display-1 text-danger fw-bold">404</h1>
      <h2 className="mb-4">الصفحة غير موجودة</h2>
      <p className="text-muted">عذرًا، الصفحة التي تبحث عنها غير موجودة.</p>
      <a href="/" className="btn btn-primary mt-3 px-4 py-2">العودة إلى الصفحة الرئيسية</a>
    </div>
  );
};

export default NotFound;