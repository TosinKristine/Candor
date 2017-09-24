<!doctype html>
<html lang="en">

        <?php include_once "includes/header.php" ?>

    <body class="gradient--active">
       
    <div class="nav-container">
            <?php include_once "includes/nav-colored.php" ?>
</div>
        <div class="main-container">

            <section class="page-title section--pullup bg--secondary">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <ol class="breadcrumb">
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="contact.php">Contact</a>
                                </li>
                                <li class="active">Book A Consultation</li>
                            </ol>
                            <hr>
                        </div>
                    </div>
                    <!--end of row-->
                    <div class="row">
                        <div class="col-sm-12 text-center">
                            <h1>
                                Enough about us,
                                <br class="hidden-xs" /> let's hear about you…
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
                        <div class="col-md-10 col-md-offset-1 col-sm-12">
                            <form class="form-consult" data-sucess="Thanks, we'll be in touch shortly." data-error="Please fill all fields correctly.">
                                <div class="form-body">
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <label>Name:</label>
                                            <input class="validate-required" type="text" name="name" placeholder="Type Your Name" />
                                        </div>
                                        <div class="col-sm-6">
                                            <label>Email Address:</label>
                                            <input class="validate-required validate-email" type="email" name="email" placeholder="you@yoursite.com" />
                                        </div>
                                    </div>
                                    <!--end of row-->
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <label>Business Industry:</label>
                                            <input type="text" name="industry" placeholder="eg. Health, Food, Design etc." />
                                        </div>
                                        <div class="col-sm-6">
                                            <label>Years in operation:</label>
                                            <div class="input-select">
                                                <select>
                                                    <option selected="" value="Default">Select An Option</option>
                                                    <option value="0-2">0 - 2 Years</option>
                                                    <option value="2-10">2 - 10 Years</option>
                                                    <option value="10+">10+ Years</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <!--end of row-->
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <label>Contact Number:</label>
                                            <input type="tel" name="phone" placeholder="(##) #### - ####" />
                                        </div>
                                    </div>
                                    <!--end of row-->
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <div class="checkbox-holder">
                                                <h5>I'm interested in (select one or more):</h5>
                                                <div class="input-checkbox">
                                                    <label>Startup Advice</label>
                                                    <div class="inner"></div>
                                                    <input type="checkbox" name="startup-advice" />
                                                </div>
                                                <div class="input-checkbox">
                                                    <label>Managing Taxes</label>
                                                    <div class="inner"></div>
                                                    <input type="checkbox" name="taxes" />
                                                </div>
                                                <div class="input-checkbox">
                                                    <label>Business Strategy</label>
                                                    <div class="inner"></div>
                                                    <input type="checkbox" name="strategy" />
                                                </div>
                                                <div class="input-checkbox">
                                                    <label>Company Structure</label>
                                                    <div class="inner"></div>
                                                    <input type="checkbox" name="company" />
                                                </div>
                                                <div class="input-checkbox">
                                                    <label>Acquisition</label>
                                                    <div class="inner"></div>
                                                    <input type="checkbox" name="acquisition" />
                                                </div>
                                                <div class="input-checkbox">
                                                    <label>Superannuation</label>
                                                    <div class="inner"></div>
                                                    <input type="checkbox" name="super" />
                                                </div>
                                                <div class="input-checkbox">
                                                    <label>Investment</label>
                                                    <div class="inner"></div>
                                                    <input type="checkbox" name="investment" />
                                                </div>
                                                <div class="input-checkbox">
                                                    <label>Business Loans</label>
                                                    <div class="inner"></div>
                                                    <input type="checkbox" name="loans" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!--end of row-->
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <label>Additional Notes:</label>
                                            <textarea name="notes" placeholder="Anything else you'd like us to know about your business?" rows="4"></textarea>
                                        </div>
                                    </div>
                                    <!--end of row-->
                                    <div class="text-center">
                                        <button type="submit" class="btn">
                                            <span class="btn__text">
                                                Submit Information
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

           <?php include_once "includes/footer.php" ?>
    </body>
</html>