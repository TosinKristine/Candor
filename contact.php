<!doctype html>
<html lang="en">
<?php include_once "includes/header.php"?>

    <body class="gradient--active">
        <div class="nav-container">
            <?php include_once "includes/nav-colored.php"?>
        </div>
        <div class="main-container">

            <section class="page-title section--pullup bg--secondary">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <ol class="breadcrumb">
                                <li>
                                    <a href="index.php">Home</a>
                                </li>
                                <li class="active">Contact</li>
                            </ol>
                            <hr>
                        </div>
                    </div>
                    <!--end of row-->
                    <div class="row">
                        <div class="col-sm-12 text-center">
                            <h1>
                                Based in Lagos
                                <br class="hidden-xs" /> working WorldWide.
                            </h1>
                        </div>
                    </div>
                    <!--end of row-->
                </div>
                <!--end of container-->
            </section>
            <section class="section-contact-1">
                <div class="container">
                    <div class="row">
                        <div class="col-md-5 col-sm-6">
                            <img alt="Image" src="img/contact1.jpg" />
                            <address>
                                Candor Consulting Pty Ltd
                                <br /> 1420 Seargents Avenue
                                <br /> Suite 904 - 920
                                <br /> Carlton, Victoria 3342
                            </address>
                            <h3>hello@candorconsulting.net
                                <br /> (03) 9822 1470
                            </h3>
                        </div>
                        <div class="col-md-7 col-sm-6">
                            <form class="form-consult" data-success="Thanks, we'll be in touch shortly." data-error="Please fill all fields correctly.">
                                <h6 class="text-center">Send An Enquiry</h6>
                                <hr>
                                <div class="form-body">
                                    <div class="col-md-6">
                                        <label>Name:</label>
                                        <input class="validate-required" type="text" name="name" placeholder="Type Your Name" />
                                    </div>
                                    <div class="col-md-6">
                                        <label>Email Address:</label>
                                        <input class="validate-required validate-email" type="email" name="email" placeholder="you@yoursite.com" />
                                    </div>
                                    <div class="col-sm-12">
                                        <label>Your Message:</label>
                                        <textarea class="validate-required" name="message" placeholder="Type your message" rows="4"></textarea>
                                    </div>
                                    <div class="text-center">
                                        <button type="submit" class="btn">
                                            <span class="btn__text">
                                                Send Your Enquiry
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <!--end of row-->
                </div>
                <!--end of container-->
            </section>
            <section class="section-map">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-10 col-md-offset-1">
                            <div class="map-container" data-maps-api-key="AIzaSyCfo_V3gmpPm1WzJEC9p_sRbgvyVbiO83M" data-address="123 Rathdowne street, Carlton Victoria" data-marker-title="Partner">

                            </div>
                        </div>
                    </div>
                    <!--end of row-->
                </div>
                <!--end of container-->
            </section>

         
       <?php include_once "includes/footer.php"?>
    </body>
</html>