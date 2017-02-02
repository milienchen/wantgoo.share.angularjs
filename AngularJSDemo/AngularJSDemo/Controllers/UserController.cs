using System.Web.Mvc;

namespace AngularJSDemo.Controllers
{
    public class UserController : Controller
    {
        // GET: User
        public ActionResult List()
        {
            return
                this.Json(
                    new[]
                        {
                            new { firstName = "Amy", lastName = "Kuo", age = 19 },
                            new { firstName = "Mark", lastName = "Chang", age = 28 }
                        },
                    JsonRequestBehavior.AllowGet);
        }
    }
}