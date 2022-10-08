using BusinessLayer;
using EntityLayer.EntityLibrary;
using LawyerSite.Management.Sessions;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LawyerSite.Management
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<LawyersitedbContext>(i => i.UseSqlServer(@"Host=89.252.184.189;Port=5432;Database=LawyersiteDB;User Id=bittibitti;Password=159357;"));
            services.AddScoped<ISystemUserBusiness, SystemUserBusiness>();
            services.AddScoped<IBlogBusiness, BlogBusiness>();
            services.AddScoped<IBlogContentBusiness, BlogContentBusiness>();
            services.AddScoped<IBulletinBusiness, BulletinBusiness>();
            services.TryAddSingleton<IHttpContextAccessor, HttpContextAccessor>();
            services.AddScoped<SessionHelper>();
            services.AddControllersWithViews();
        }
        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }
            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Login}/{action=SignIn}/{id?}");
            });
        }
    }
}
