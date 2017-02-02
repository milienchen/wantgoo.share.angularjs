using System.Web.Mvc;

namespace AngularJSDemo.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return this.View();
        }
    }
}