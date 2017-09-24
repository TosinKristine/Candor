<!doctype html>
<html lang="en">
   <?include "includes/header.php"?>

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
                                <li class="active">Press</li>
                            </ol>
                            <hr>
                        </div>
                    </div>
                    <!--end of row-->
                    <div class="row">
                        <div class="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 text-center">
                            <h1>News & Articles</h1>
                        </div>
                    </div>
                    <!--end of row-->
                </div>
                <!--end of container-->
            </section>
            <section>
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">
                            <a class="news-article-link" href="press-detail.php">
                                <div class="news-article-snippet boxed bg--white">
                                    <h6>June 15th</h6>
                                    <h3>What you should know about this year's budget changes</h3>
                                    <span>Written by Anne Kilgour</span>
                                </div>
                            </a>

                            <a class="news-article-link" href="press-detail.php">
                                <div class="news-article-snippet boxed imagebg" data-scrim-bottom="9">
                                    <div class="background-image-holder">
                                        <img alt="image" src="img/home2.jpg" />
                                    </div>
                                    <h6>June 6th</h6>
                                    <h3>Navigating the ATO's recent bout of SMB-targeted tax changes</h3>
                                    <span>Written by Kelly Barber</span>
                                </div>
                            </a>

                            <a class="news-article-link" href="press-detail.php">
                                <div class="news-article-snippet boxed bg--white">
                                    <h6>May 23rd</h6>
                                    <h3>Common mistakes when starting out a business &mdash; tips from our clients</h3>
                                    <span>Written by Jonathan Collins</span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <!--end of row-->
                </div>
                <!--end of container-->
            </section>

            <?php include_once "includes/footer.php"?>
    </body>
</html>