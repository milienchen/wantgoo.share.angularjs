using System;
using System.Web.Mvc;

namespace AngularJSDemo.Controllers
{
    public class UserController : Controller
    {
        // GET: User
        public ActionResult List()
        {
            var random = new Random(Guid.NewGuid().GetHashCode());

            return
                this.Json(
                    new[]
                        {
                            new { firstName = "Amy", lastName = "Kuo", age = random.Next(120) },
                            new { firstName = "Mark", lastName = "Chang", age = random.Next(120) }
                        },
                    JsonRequestBehavior.AllowGet);
        }
    }
}