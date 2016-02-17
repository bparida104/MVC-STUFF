using AjaxBeginForm.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AjaxBeginForm.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home  
        [HttpGet]
        public ActionResult EmployeeMaster()
        {
            return View();
        }
        [HttpPost]
        public ActionResult EmployeeMaster(EmpModel obj)
        {
            if (ModelState.IsValid)
            {
                ViewBag.Records = "Name : " + obj.Name + " City:  " + obj.City + " Addreess: " + obj.Address;
               
            }
            return PartialView("_PEmployeeMaster");
        } 
         public ActionResult Test()
        {
            return View();
        }
        public ActionResult Test2()
        {
            return View();
        }
        public ActionResult Test3()
        {
            return View();
        }
    }
}
